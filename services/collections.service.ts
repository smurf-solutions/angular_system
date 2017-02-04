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
	
	handleError( error ) {
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
	
	private load( db, collection ) {
		if( !this.data[collection] ) this.data[collection] = {};
		return this.http.get( db + collection )
			.map( res=>res.json() )
			.do( res => { this.data[collection] = res; } )
			.catch( this.handleError );
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
		
		return this.http.post( this.db + 'collections/'+ collection , data);//, options );
	}
	
	changeDb( db ) {
		this.db = db;
		this.data = {};
		this.toasty.info({title:'DB', msg:db});
	}
}