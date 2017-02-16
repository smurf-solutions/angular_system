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
	dbUrl = "//localhost:3000/collections/demo/";
	user: String = "siso1"; 
	pass: String = "1234";
	
	constructor(
		public dialog: MdDialog,
		public router: Router
	) {}
	
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
				} else {
					this.router.navigateByUrl('/Home');
				}
			} )
	}

}

