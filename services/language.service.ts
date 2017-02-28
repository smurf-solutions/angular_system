import { Injectable }         from '@angular/core';
import { Http }               from '@angular/http';
import { ToastyService }      from 'ng2-toasty';

import * as Dictionaries      from 'i18n.js';

@Injectable()
export class LanguageService {
	lang : String = localStorage.getItem( 'lang' ) || Object.keys( Dictionaries )[0];
	avaibleDictionaries : Array = this.getAvaibleDictionaries();
	
	constructor(
		private http   : Http,
		private toasty : ToastyService
	){}

	private getAvaibleDictionaries() : Array {
		let ret : Array = [];
		Object.keys( Dictionaries ).forEach( ( k ) => {
			ret.push({ iso: k, title: Dictionaries[k]['_'].title });
		} )
		return ret;
	}
	
	changeLang( lang ) : void {
		localStorage.setItem( 'lang', lang );
		this.lang = lang;
	}
	
	translate( word: String, scope: String = "default") : String {
		if( Array.isArray( word ) ) {
			let _this = this, res = ''
			word.forEach( w => res += ' '+_this.translate( w, scope ) )
			return res.substring( 1 )
		}
		
		if(    Dictionaries[this.lang] 
			&& Dictionaries[this.lang][scope] 
			&& Dictionaries[this.lang][scope][word] 
		) {
			return Dictionaries[this.lang][scope][word];
		} else {
			return word;
		}
	}
}