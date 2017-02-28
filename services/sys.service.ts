import { Injectable }         from '@angular/core'


@Injectable()
export class SysService {
	private storage  = {}
	
	store( obj : Object, key : String, exclude : Array<String> ) : void {
		this.storage[key] = this.storage[key] || {}
		exclude = exclude || []
		Object.keys( obj ).forEach( method => {
			if( obj[method] 
				&& !obj[method].constructor.name.match(/(^Md|Service$)/)
				&& exclude.indexOf( method ) == -1 
			) this.storage[key][method] = obj[method]
		})
	}

	restore( obj: object, key: string ) : void {
		if( this.storage[key] ) {
			let methods = Object.keys( this.storage[key] )
			methods.forEach( method => obj[method] = this.storage[key][method] )
		}
	}
}
