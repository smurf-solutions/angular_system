import { Injectable }         from '@angular/core';
import { Http }               from '@angular/http';

@Injectable()
export class LanguageService {
	lang: String = "bg";
	dictionary: Object;
	
	constructor(
		private http: Http
	){
		this.getDictionary();
	}
	
	getDictionary() {
		this.http.get( "i18n/"+this.lang+".json" )
			.map( res => res.json() )
			.subscribe( res => {
				this.dictionary = res;
			});
	}
	
	translate( word: String, scope: String = "–"): String{
		if( this.dictionary && this.dictionary[scope] && this.dictionary[scope][word] ) {
			return this.dictionary[scope][word];
		} else {
			return word;
		}
	}
	
}