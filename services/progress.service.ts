import { Injectable }    from '@angular/core'

@Injectable()
export class ProgressService {
	requests : Integer = 0
	
	constructor() {
		let obj = this
		let XMLHttpRequest_originalOpen = XMLHttpRequest.prototype.open
		XMLHttpRequest.prototype.open = function() {
			obj.requests++
			this.addEventListener('load', function() {
				if( obj.requests > 0 ) obj.requests--
			});
			XMLHttpRequest_originalOpen.apply(this, arguments)
		};
		//obj.on.stopProgress.subscribe( event => obj.requests = 0 )
	}
}