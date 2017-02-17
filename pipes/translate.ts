import { NgModule, Pipe }      from '@angular/core';

//import { Dictionary }          from 'i18n/bg.js';
import { LanguageService }   from '@sys/services';

let Dictionary = {
	'Users':'Потребители'
}

@Pipe({ 
	name:'translate' 
})
export class TranslatePipe {
	constructor(
		private languageService: LanguageService
	){}

	transform( word: String, scope: String = '_' ): String {
		return this.languageService.translate( word, scope );
	}
}


@NgModule({
	//providers: [ LanguageService ],
	declarations: [ TranslatePipe ],
	exports: [ TranslatePipe ]
})
export class TranslateModule {}