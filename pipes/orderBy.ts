/*
 * Example use
 * 	| orderBy : 'prop1.prop2...' : 'asc'
 */

import {Pipe, NgModule} from '@angular/core'

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe { 
    transform(input:any[], property:string, type:string = 'asc'): any{
		if(!Array.isArray(input) || typeof property !== 'string') 
			return input
		
		let sign  = (type=='asc'?1:-1)
        let props = property.split(".")
		
		return input.sort( (a,b)=>{
			if( props.length == 1 ) {
				let aa = a[props[0]], bb = b[props[0]]; 
			} else if( props.length == 2 ) {
				let aa = a[props[0]] ? a[props[0]][props[1]] : '', 
					bb = b[props[0]] ? b[props[0]][props[1]] : ''
			} else if( props.length == 3 ) {
				let aa = a[props[0]] && a[props[0]][props[1]] ? a[props[0]][props[1]][props[2]] : '', 
					bb = b[props[0]] && b[props[0]][props[1]] ? b[props[0]][props[1]][props[2]] : ''
			} else if( props.length == 4 ) {
				let aa = a[props[0]] && a[props[0]][props[1]] && a[props[0]][props[1]][props[2]] ? a[props[0]][props[1]][props[2]][props[3]] : '', 
					bb = b[props[0]] && b[props[0]][props[1]] && b[props[0]][props[1]][props[2]] ? b[props[0]][props[1]][props[2]][props[3]] : ''
			} else if( props.length == 5 ) {
				let aa = a[props[0]] && a[props[0]][props[1]] && a[props[0]][props[1]][props[2]] && a[props[0]][props[1]][props[2]][props[3]] ? a[props[0]][props[1]][props[2]][props[3]][props[4]] : '', 
					bb = b[props[0]] && b[props[0]][props[1]] && b[props[0]][props[1]][props[2]] && b[props[0]][props[1]][props[2]][props[3]] ? b[props[0]][props[1]][props[2]][props[3]][props[4]] : ''
			}
			
			if( !aa ) aa = ''
			if( !bb ) bb = ''
			if((isNaN(parseFloat(aa)) || !isFinite(aa)) || (isNaN(parseFloat(bb)) || !isFinite(bb))) {
				if(aa.toString().toLowerCase() < bb.toString().toLowerCase()) return -1*sign
				if(aa.toString().toLowerCase() > bb.toString().toLowerCase()) return 1*sign
			}
			else {
				if(parseFloat(aa) < parseFloat(bb)) return -1*sign
				if(parseFloat(aa) > parseFloat(bb)) return 1*sign
			}
			
			return 0
		} )
	}	
}


@NgModule({
	declarations: [ OrderByPipe ],
	exports: [ OrderByPipe ]
})
export class OrderByModule {}