﻿import { NgModule, Pipe }   from '@angular/core';
import { LanguageService }  from '@sys/services';


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
	declarations: [ TranslatePipe ],
	exports: [ TranslatePipe ]
})
export class TranslateModule {}