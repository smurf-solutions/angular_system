import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }    from 'rxjs/Observable';
//import { MdSnackBar }    from '@angular/material';
import { ToastyService } from 'ng2-toasty';


@Injectable()
export class CollectionsService {
	data = {};
	
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
	
	load( collection, file ) {
		if( !this.data[collection] ) this.data[collection] = {};
		return this.http.get( 'collections/'+ collection +'/'+ file )
			.map( res=>res.json() )
			.do( res => { this.data[collection][file] = res; } )
			.catch( this.handleError );
	}
	
	
	get( collection, file ) {
		if( !file ) file = "get.json";
		if( !this.data[collection] || !this.data[collection][file] ) {
			return this.load( collection, file );
		} else {
			return Observable.of( this.data[collection][file] );
		}
	}
	
	post( collection, data, file ) {
		if( !file ) file = 'post.json';
		//let headers = new Headers({ 'Content-Type': 'application/json' });
		//let options = new RequestOptions({ headers: headers });

		return this.http.post( 'collections/'+ collection +'/'+ file, data);//, options );
	}
}