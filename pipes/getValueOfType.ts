/*
	Връща [value] от подадения obj спрямо полето [type]
	arrObj = [ { type: "work", value: "09999999" },
			   { type: "home", value: "0888888" }
			 ]
	{{ arrObj | getValueOfType : "home"  }} -->> ще върне "0888888" 
*/

import { NgModule, Pipe }    from '@angular/core';

@Pipe({
	name: 'getValueOfType'
})
export class getValueOfTypePipe {
	transform( input: obj[], type: string ) {
		let ret = null;
		if( input instanceof Array ) {
			input.forEach((k,v)=>{
				if(k==type) ret=v;
			});
		}
		return ret;
	}
}


@NgModule({
	declarations: [ getValueOfTypePipe ],
	exports: [ getValueOfTypePipe ]
})
export class getValueOfTypeModule {}