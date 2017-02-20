import { Injectable }    from '@angular/core';
import { EventsService } from '@sys/services';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ToastService {
	constructor(
		private events: EventsService,
		private toasty: ToastyService
	){
		this.events.collectionRecieved.subscribe( res => this.displayFromKey( res ) );
	}
	
	private displayFromKey( res : Array ) {
		if( res.success ) this.toasty.success( this.parseMsg( res.success ) );
		if( res.error )   this.toasty.error(   this.parseMsg( res.error )   );
		if( res.warning ) this.toasty.warning( this.parseMsg( res.warning ) );
		if( res.wait )    this.toasty.wait(    this.parseMsg( res.wait )    );
		if( res.info )    this.toasty.info(    this.parseMsg( res.info )    );
	}
	
	private parseMsg( msg ) {
		if( typeof msg == 'string' ) return { msg: msg };
		if( typeof msg == 'object' ) return msg;
	}
}