import { Injectable,Inject }        from '@angular/core';
import { Http }                     from '@angular/http';
import { Router,ActivatedRoute }                  from '@angular/router';
import { Headers, RequestOptions }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';

import { ToastyService }            from 'ng2-toasty';
import { AuthService }              from '@sys/services';
import { EventsService }            from '@sys/services';
import { LanguageService }          from '@sys/services';

@Injectable()
export class CollectionsService {
	cache = {};
	
	constructor (
	    private auth  : AuthService,
		private http  : Http,
		public toasty : ToastyService,
		private on    : EventsService,
		private lang  : LanguageService
	) {
		this.on.loginChanged.subscribe( res => this.cache = {} );
	}
	
	
	private handleError( error ) {
		console.log(error); 
	}

	private handleMessages( res ) {
		if( res.success ) {
			this.toasty.success( this.lang.translate("Saved successfully",'messages') );
		} else if(res.error) {
			this.toasty.error( this.lang.translate("Cannot save",'messages') )
		}
		if( res.msg ) {
			switch(res.msg.type) {
				case 'success': this.toasty.success( this.lang.translate(res.msg,'messages') ); break;
				case 'error'  : this.toasty.error( this.lang.translate(res.msg,'messages') );   break;
				case 'warning': this.toasty.warning( this.lang.translate(res.msg,'messages') ); break;
				case 'wait'   : this.toasty.wait( this.lang.translate(res.msg,'messages') );    break;
				default       : this.toasty.info( this.lang.translate(res.msg,'messages') ); 
			}
		}
		
	}

	private load( db, collection ): Observable {
		let options = { headers: {token: this.auth.getToken()} };
		
		return this.http.get( db + collection, options ).map( res => res.json() )
			.catch( err => this.toasty.error({ title: this.lang.translate('Connection error','messages'), msg: err.status + ' '+ err.statusText }) )
			.do( res => {
				if( res.access && res.access == 'DENIDED' ) {
					this.toasty.error( this.lang.translate('Access DENIDED','messages') );
				} //else { this.cache[collection] = res.data }
			})
	}

	/*************/

	get( collection, where ) {
		if( !this.cache[collection] ) { 
			return this.load( this.auth.dbUrl, collection ) 
		} else {
			return Observable.of( this.cache[collection])
		}
	}
	
	post( collection, data, where ) {
		return this.http.post( this.auth.dbUrl + collection , data) 
					.map( res=>res.json() )
					.do( res => {this.handleMessages(res)} )
					.catch( this.handleError );
	}

	
}