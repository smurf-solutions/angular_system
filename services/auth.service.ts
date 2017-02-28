import { Injectable }             from '@angular/core'
import { EventEmitter }           from '@angular/core'
import { MdDialog }               from '@angular/material'
import { Observable }             from 'rxjs/Observable'

import { LoginModalComponent }    from '@sys/modals'
import { EventsService }          from '@sys/services'


@Injectable()
export class AuthService {
	onLoginChanged = new EventEmitter()
	dbUrl:String // = "//localhost:3000/collections/demo/"
	user: String
	pass: String
	
	constructor(
		public dialog: MdDialog,
		public events: EventsService,
	) {
		this.restoreLastLogin()
	}
	
	private storeLastLogin(){
		let l = { dbUrl: this.dbUrl, user: this.user, pass: this.encode(this.pass) }
		localStorage.setItem( 'lastAccess', this.encode(JSON.stringify( l )) )
	}
	private restoreLastLogin() {
		try {
			let l = JSON.parse( this.decode( localStorage.getItem( 'lastAccess' ) ) )
			this.dbUrl = l.dbUrl
			this.user = l.user
			this.pass = this.decode( l.pass )
		} catch( err ) {}
	}
	
	
	// base64 encoded/decode ascii to ucs-2 string
	private encode( str ) { 
		return window.btoa(escape(encodeURIComponent(str)))
	}
	private decode( str ) { 
		try {
			return decodeURIComponent(unescape(window.atob(str)))
		} catch(err) { return ''; }
	}
	
	
	getHeader() {
		var token = btoa( this.user + ':' + this.pass )
		return { headers: { Authorization: 'Basic ' + token } }
	}
	
	loginModal(): void {
		let dialogRef = this.dialog.open( LoginModalComponent )
					
		dialogRef.componentInstance.user = this.user
		dialogRef.componentInstance.pass = this.pass
		dialogRef.componentInstance.db   = this.dbUrl
		
		dialogRef.afterClosed().subscribe( res => {			
				if( res ) {
					this.user  = res.user
					this.pass  = res.pass
					this.dbUrl = res.db
					this.storeLastLogin()
					this.events.loginChanged.emit()
				} 
			} )
	}
}

