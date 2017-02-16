import { Injectable, Inject }      from '@angular/core';
import { Http }                    from '@angular/http';
import { Router }                  from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }              from 'rxjs/Observable';

import { ToastyService }           from 'ng2-toasty';

import { AuthService }             from '@sys/services';
import { MdDialog }                from '@angular/material';
import { LoginModalComponent }     from '@sys/modals';
		


@Injectable()
export class CollectionsService {
	data = {};
	
	constructor (
		private http: Http,
		public toasty: ToastyService,
		public router: Router,
		public dialog: MdDialog,
	) {
		this.authService = new AuthService( this.dialog, this.router );
	}
	
	private handleError( error ) {
		console.log(error); 
	}

	private handleMessages( res ) {
		if( res.success ) {
			this.toasty.success("Записът е успеше");
		} else if(res.error) {
			this.toasty.error("Не може да се запише")
		}
		if( res.msg ) {
			switch(res.msg.type) {
				case 'success': this.toasty.success(res.msg); break;
				case 'error'  : this.toasty.error(res.msg); break;
				case 'warning': this.toasty.warning(res.msg); break;
				case 'wait'   : this.toasty.wait(res.msg); break;
				default       : this.toasty.info(res.msg); 
			}
		}
		
	}

	private load( db, collection ): Observable {
		let options = { headers: {token: this.authService.getToken()} };
		if( this.data[collection] ) this.data[collection] = null;
		let errorCatched = false;
		
		return new Observable( observer => {
			this.http.get( db + collection, options ).map( res=>res.json() ) 
				.catch( err => { if(!errorCatched) { errorCatched = true; this.authAndLoad( db, collection, observer )} } )
				.subscribe( res => {
						if( res.access == 'DENIDED' ) {
							this.authAndLoad(db, collection, observer);
						} else {
							this.data[collection] = res;
							observer.next( res );
						}
					}, err => { if(!errorCatched) { this.authAndLoad( db, collection, observer ); errorCatched=true}, ()=>{} )
		});
		
		
	}
	private authAndLoad(db,collection,observer){
			this.authService.loginModal().subscribe( ret => { 
				if(ret) this.load( this.authService.dbUrl, collection ).subscribe( res => if(observer) observer.next( res ) );
			});
		}
	
	/*************/
	/*
	changeDb( db ) {
		this.authService.dbUrl = db;
		this.data  = {};
		this.toasty.info({title:'DB', msg:db});
	}*/
	resetData() {
		this.authService.loginModal().subscribe( res => {
			if( res ) {
				this.data = {};
			}
		});
	}
	
	get( collection, where ) {
		if( !this.data[collection] ) { 
			return this.load( this.authService.dbUrl, collection );
		} else {
			return Observable.of( this.data[collection]); 
		}
	}
	
	post( collection, data, where ) {
		return this.http.post( this.authService.dbUrl + collection , data) 
					.map( res=>res.json() )
					.do( res => {this.handleMessages(res)} )
					.catch( this.handleError );
	}

	
}