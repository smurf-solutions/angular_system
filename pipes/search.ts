/**
	Usage: [array of objects] | search : 'term' : [array of keys] : objInfo
	!!! objInfo трябва да е бил инициализиран предварително като обект !!!
**/
import { NgModule, Pipe } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe {
    
    search( item, term ) {
        let exists = false;
        let _this = this;
        
        if( typeof item === 'object') {
            Object.keys( item ).forEach( key => {
                exists = exists || _this.search( item[key], term );
            });
        }
        
        exists = exists || item.toString().toLowerCase().indexOf( term ) > -1;
        
        return exists;
    }

    transform( items: object[], term: string, keys: array, info: object ) {
		if( !items || !term )
            return this.dump(items, items, info);
		
		term = term.toString().trim().toLowerCase();
		let that = this;
        let ret = items.filter( item => { return that.search( item, term ); } );

        /*
		let terms = term.split(' ');
		let ret = items;
		terms.forEach( function(term) { 
            ret = 
				ret.filter( item => {
					return that.search( item, term );
				} ) 
			;
        });*/
        return this.dump(items,ret,info);
    }
	dump( items, ret, info ){
		if( typeof info === 'object' ) { 
				info.all = items ? items.length : 0;
				info.founded = ret ? ret.length : 0;
		}
		return ret;
	}
}


@NgModule({
    declarations: [ SearchPipe ],
    exports: [ SearchPipe ]
})
export class SearchModule {}