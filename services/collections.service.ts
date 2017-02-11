import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
//import { MdSnackBar }    from '@angular/material';
import { ToastyService } from 'ng2-toasty';


@Injectable()
export class CollectionsService {
	data = {};
	db   = '//localhost:3000/collections/demo/';
	
	constructor (
		private http: Http,
		//public snackBar: MdSnackBar
		public toasty: ToastyService
	) {}
	
	
	
	private handleError( error ) {
		console.log(error); 
		return;
		/*
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = body.error || JSON.stringify(body);
		  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		this.toasty.error(errMsg);
		//this.snackBar.open(errMsg, null, 4000);
		console.error(errMsg);
		return Observable.throw(errMsg);
		*/
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
	
	private load( db, collection ) {
		if( !this.data[collection] ) this.data[collection] = {};
		return this.http.get( db + collection )
			.map( res=>res.json() )
			.do( res => { this.data[collection] = res; this.handleMessages(res) } )
			.catch( this.handleError );
	}
	
	/*************/
	
	changeDb( db ) {
		this.db = db;
		this.data = {};
		this.toasty.info({title:'DB', msg:db});
	}
	
	get( collection, where ) {
		if( !this.data[collection] ) { 
			return this.load( this.db, collection );
		} else {
			return Observable.of( this.data[collection]); 
		}
	}
	
	post( collection, data, where ) {
		//let headers = new Headers({ 'Content-Type': 'application/json' });
		//let options = new RequestOptions({ headers: headers });
		
		return this.http.post( this.db + collection , data) //, options );
					.map( res=>res.json() )
					.do( res => {this.handleMessages(res)} )
					.catch( this.handleError );
	}

	
}