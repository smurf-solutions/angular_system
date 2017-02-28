/** How to Query with JSON
	a   ==    2   => { a : { $eq : 2 } }   <=>   { a : 2 }
	a    >    2   => { a : { $gt : 2 } }
	a    <    2   => { a : { $lt : 2 } }
	a like qwe%   => { a : { $regex : /^qwe/, options: "im" } }
	a   in [1,2]  => { a : { $in : [ 1, 2 ] } }
	a>8 || a<2    => { &or : [ { a : {$gt : 8}, { a : {$lt : 2} } ] }
	
	a >= 2            => { a : { $gte : 2 } }   <=>   { a : { $eq : 2, $gt : 2 }
	a >= 2 && a < 30  => { a : { $gte : 2, $lt : 30 } }   <=>   { a : { $eq : 2, $gt : 2, $lt : 30 }
	a > 2 && b = 3    => { &and : [ { a : { $gt : 2 } }, { b : { $eq : 3 } } ] }
**/

export class QueryService {
	toString() {
		return JSON.stringify( this.removeEmpty() )
	}
	private removeEmpty( obj ) {
		if( !obj )  obj = this
		let ret = {}
		Object.keys( obj ).forEach( k => {
			if( obj[k] ) {
				if( Array.isArray( obj[k] ) ) {
					let arr = [];
					obj[k].forEach( kk => {
						if( kk ) {
							if(typeof kk == 'object') { 
								let n = this.removeEmpty( kk )
								let hasValues = Object.values(n).filter( ov => ov !== undefined ).length
								if( hasValues ) arr.push( n )
							} else {
								arr.push( kk )
							}
						}
					})
					ret[k] = arr.length > 0 ? arr : undefined 
				} else if( typeof obj[k] == 'object' ) {
					ret[k] = this.removeEmpty( obj[k] )
				} else {
					ret[k] = obj[k]
				}
			
			}
		})
		return Object.keys( ret ).length > 0 ? ret : undefined
	}
	
	/* [ { k1 : v1 }, { k2 : v2 }, ... ] 
	getArray( obj ) {
		if( !obj ) obj = this
		let ret = []
		Object.keys( obj ).forEach( k => {
			if( obj[k] ) ret.push( {[k]:obj[k]} )
		})
		return ret.length > 0 ? ret : undefined
	}
	*/
	
	flatten( obj ) {
		if( !obj )  obj = this
		var result = {};
		function recurse (cur, prop) {
			if (Object(cur) !== cur) {
				result[prop] = cur;
			} else if (Array.isArray(cur)) {
				 for(var i=0, l=cur.length; i<l; i++)
					 recurse(cur[i], prop + "[" + i + "]");
				if (l == 0)
					result[prop] = [];
			} else {
				var isEmpty = true;
				for (var p in cur) {
					isEmpty = false;
					recurse(cur[p], prop ? prop+"."+p : p);
				}
				if (isEmpty && prop)
					result[prop] = {};
			}
		}
		recurse( obj, "" );
		return result;
	}
	
	unflatten( obj ) {
		if (Object(obj) !== obj || Array.isArray(obj))
			return obj;
		var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
			resultholder = {};
		for (var p in obj) {
			var cur = resultholder,
				prop = "",
				m;
			while (m = regex.exec(p)) {
				cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
				prop = m[2] || m[1];
			}
			cur[prop] = obj[p];
		}
		return resultholder[""] || resultholder;
	}
	
}