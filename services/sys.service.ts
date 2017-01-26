import { Injectable }    from '@angular/core';
//import { CompanyConfig } from '../company.config.js';

@Injectable()
export class SysService {
	//public  company  = CompanyConfig;
	private storage  = {};


	/**
	Store and Restore object
	*/
	store( obj: object, key: string, exclude: string[] ) {
		this.storage[key] = this.storage[key] || {};

		if(!exclude) {
			this.storage[key] = obj;
		} else {
			exclude = exclude || [];

			let methods = Object.keys( obj );
			methods.forEach( method => { if(!(obj[method] instanceof AppService))
				if( exclude.indexOf( method ) == -1 )  this.storage[key][method] = obj[method];
			});
		}
	}
	restore( obj: object, key: string ) {
		if( this.storage[key] ) {
			let methods = Object.keys( this.storage[key] );
			methods.forEach( method => obj[method] = this.storage[key][method] );
		}
	}
}
