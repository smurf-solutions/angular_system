import { Injectable, Component }  from '@angular/core';
import { MdDialog }               from '@angular/material';
import { Router }                 from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import { LoginModalComponent }    from '@sys/modals';


@Component({
	providers: [ Router ]
})
@Injectable()
export class AuthService {
	dbUrl:String;// = "//localhost:3000/collections/demo/";
	user: String; 
	pass: String;
	
	constructor(
		public dialog: MdDialog,
		public router: Router
	) {
		let first = Object.values( JSON.parse( localStorage.loginDatas || '{}' ) ).shift();
		if( first ) {
			this.dbUrl = first.db;
			this.user  = first.user;
			this.pass  = first.pass;
		}
	}
	
	getToken(): String {
		var token = [this.user, this.pass ];
		return btoa( JSON.stringify( token ) ); 
	}
	
	loginModal(): Observable {
		let dialogRef = this.dialog.open( LoginModalComponent );
					
		dialogRef.componentInstance.user = this.user;
		dialogRef.componentInstance.pass = this.pass;
		dialogRef.componentInstance.db   = this.dbUrl;
		
		return dialogRef.afterClosed().do( res => {			
				if( res ) {
					this.user  = res.user;
					this.pass  = res.pass;
					this.dbUrl = res.db;
					// this.events.loginChanged.emit(  );
				} else {
					this.routeToHome();
				}
			} )
	}
	routeToHome(){
		this.router.navigateByUrl('/Home');
	}
}

