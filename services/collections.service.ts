import { Injectable,Inject, EventEmitter } from '@angular/core';
import { Http }                     from '@angular/http';
import { Router,ActivatedRoute }                  from '@angular/router';
import { Headers, RequestOptions }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';

import { ToastyService }            from 'ng2-toasty';

import { AuthService }              from '@sys/services';
//import { SvetlioService }           from '@sys/services';
//import { MdDialog }                 from '@angular/material';
//import { LoginModalComponent }      from '@sys/modals';
		


@Injectable()
export class CollectionsService {
	data = {};
	loginChangedEmitter = new EventEmitter();
	
	constructor (
	   private auth: AuthService,
	   //@Inject(SvetlioService) smk: SvetlioService,
		private http: Http,
		public toasty: ToastyService,
		//public router: Router,
		//public dialog: MdDialog,
		//private route: ActivatedRoute
	) {
		//this.auth = new auth();// this.dialog, this.router );
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
		let options = { headers: {token: this.auth.getToken()} };
		
		return this.http.get( db + collection, options ).map( res=>res.json() )
			.catch( err => this.toasty.error('Login error') )
			.do( res => {
					if( res.access && res.access == 'DENIDED' ) {
							this.toasty.error('Access DENIDED');
						} 
			}, err => this.toasty.error('Login error') )
		
		////////////////////////////////
		/*
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
		*/
	}
	/*
	private authAndLoad(db,collection,observer){
			this.auth.loginModal().subscribe( ret => { 
				if(ret) this.load( this.auth.dbUrl, collection ).subscribe( res => if(observer) observer.next( res ) );
			});
		}
	*/
	/*************/
	/*
	changeDb( db ) {
		this.auth.dbUrl = db;
		this.data  = {};
		this.toasty.info({title:'DB', msg:db});
	}*/
	//onLoginChanged() { return this.loginChanged; }
	/*
	resetData() {
		this.auth.loginModal().subscribe( res => {
			if( res ) {
				this.data = {};
				this.loginChangedEmitter.emit();
			}
		});
	}
	*/
	
	get( collection, where ) {
		//console.log( collection)
		if( !this.data[collection] ) { 
			console.log( this.auth.dbUrl );
			//return Observable.of( {data:[]} );
			return this.load( this.auth.dbUrl, collection );
		} else {
			return Observable.of( this.data[collection]); 
		}
	}
	
	post( collection, data, where ) {
		return this.http.post( this.auth.dbUrl + collection , data) 
					.map( res=>res.json() )
					.do( res => {this.handleMessages(res)} )
					.catch( this.handleError );
	}

	
}