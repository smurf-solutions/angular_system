import { Injectable,Inject }        from '@angular/core'
import { Http }                     from '@angular/http'
import { Headers, RequestOptions }  from '@angular/http'
import { Observable }               from 'rxjs/Observable'

import { ToastyService }            from 'ng2-toasty'
import { AuthService }              from '@sys/services'
import { EventsService }            from '@sys/services'
import { LanguageService }          from '@sys/services'
import { ProgressService }          from '@sys/services'

@Injectable()
export class CollectionsService {
	cache = {}
	
	constructor (
	    private auth    : AuthService,
		private http    : Http,
		private toasty  : ToastyService,
		private events  : EventsService,
		private lang    : LanguageService,
		private progress: ProgressService,
	) {
		this.events.loginChanged.subscribe( res => this.cache = {} )
	}
	
	
	private handleError( err ) {
		this.toasty.error({ title: this.lang.translate('Connection error','messages'), msg: err.status + ' '+ err.statusText })
		if( err.status == 0 && err.type == 3 ) this.progress.requests = 0
	}

	private handleMessages( res ) {
		if( res.success ) {
			this.toasty.success( this.lang.translate("Modified records","messages")+": "+res.success )
		} else if( res.error ) {
			this.toasty.error( this.lang.translate("Cannot save",'messages') )
			console.error( res.error )
		} else if( typeof res.success !== 'undefined' ) {
			this.toasty.info( this.lang.translate( 'No records modified','messages' ) )
		}
		if( res.msg ) {
			switch(res.msg.type) {
				case 'success': this.toasty.success( this.lang.translate(res.msg,'messages') ); break
				case 'error'  : this.toasty.error( this.lang.translate(res.msg,'messages') );   break
				case 'warning': this.toasty.warning( this.lang.translate(res.msg,'messages') ); break
				case 'wait'   : this.toasty.wait( this.lang.translate(res.msg,'messages') );    break
				default       : this.toasty.info( this.lang.translate(res.msg,'messages') )
			}
		}
	}

	private load( url ): Observable {
		return this.http.get( url, this.auth.getHeader() ).map( res => res.json() )
			.catch( err => this.handleError( err ) )
			.do( res => {
				if( res.access && res.access == 'DENIDED' ) {
					this.toasty.error( this.lang.translate('Access DENIDED','messages') )
				} //else { this.cache[ url ] = res.data }
			})
	}

	/*************/

	get( collection : String, urlParams : String ) : Observable {
		if( typeof urlParams == 'object' ) urlParams = JSON.stringify( urlParams )
			
		let url = this.auth.dbUrl + collection + ( urlParams ? "?find="+urlParams : "" )
		if( !this.cache[ url ] ) { 
			return this.load( url, collection ) 
		} else {
			return Observable.of( this.cache[ url ] )
		}
	}
	
	post( collection : String, data : Object, urlParams : String ) : Observable {
		if( typeof urlParams == 'object' ) urlParams = JSON.stringify( urlParams )
		
		let url =  this.auth.dbUrl + collection + ( urlParams ? '?update=' + urlParams : "" )
		
		if( data._id && !data.$set ) {
			data = { _id : data._id, $set : data }
			delete data.$set._id
		}
		
		return this.http.post( url, data, this.auth.getHeader() ) 
			.catch( err => this.handleError( err ) )
			.map( res=>res.json() )
			.do( res => {this.handleMessages(res)} )
	}
	
	remove( collection : String, urlParams : String ) : Observable {
		if( typeof urlParams == 'object' ) urlParams = JSON.stringify( urlParams )
		
		let url = this.auth.dbUrl + collection + '?remove=' + urlParams
		return this.http.delete( url, this.auth.getHeader() )
			.catch( err => this.handleError( err ) )
			.map( res => res.json() )
			.do( res => this.handleMessages( res ) )
	}
}