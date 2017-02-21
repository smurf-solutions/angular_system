import { NgModule, Component }          from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { MaterialModule, MdDialogRef }  from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { FormsModule }                  from '@angular/forms';

import { PipeModules }                  from '@sys/pipes';


@Component({
	selector: 'login-form',
	styles: [`
		md-dialog-content {height:100%; width:350px}
		md-input, md-select { width: 100% }
		button[md-button], button[md-raised-button] {  }
	`],
	template: `
		<div fxLayout>
			<h2 fxFlex md-dialog-title><md-icon style="position:relative;top:3px">lock</md-icon>&nbsp;&nbsp; {{ title|translate }} </h2>
			<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>
		</div>
		<md-dialog-content>
				<div fxLayout="row">
					<md-input-container style="width:100%">
						<input mdInput [(ngModel)]="db" placeholder="{{'Database'|translate}} URL" 
							autofocus autocomplete="off" (keyup.enter)="submitLogin()">
					
						<div mdSuffix>
							<button md-icon-button [mdMenuTriggerFor]="menu_saved_dbs"><md-icon>arrow_drop_down</md-icon></button>
							<md-menu #menu_saved_dbs="mdMenu" x-position="before">
								<button md-button style="width:100%;text-align:left;margin:0.5em 0;" 
									*ngFor="let d of saved_dbs"
									(click)="db = d.db; user = d.user; pass = d.pass; remember=true"
								>
									<div>{{ d.user }} <br> <i style="font-size:80%">{{ d.db }}</i>  </div>
								</button>
							</md-menu>
						</div>
					</md-input-container>
				</div>
				<br>&nbsp;<br>
			<div>
				<md-input-container style="width:100%">
					<input mdInput [(ngModel)]="user" type="text" name="username" placeholder="{{ lableUser | translate }}" 
						autocomplete="off" (keyup.enter)="submitLogin()"> 
				</md-input-container>
			</div>
			<div> 
				<md-input-container style="width:100%">
					<input mdInput [(ngModel)]="pass" type="password" name="password" placeholder="{{ lablePass | translate }}" 
						autocomplete="off" (keyup.enter)="submitLogin()"> 
				</md-input-container>
			</div>
			
		</md-dialog-content>
		<md-dialog-actions flexLayout="row">
			<div fxFlex>
				<button md-raised-button color="{{ color }}" (click)="submitLogin()"> {{ buttonLogin | translate }} </button> 
			</div>
			<div>
				<md-checkbox [(ngModel)]="remember"> {{'Remember'|translate }} </md-checkbox>
			</div>
		</md-dialog-actions>
	`
})
export class LoginModalComponent {
	title:        String  = "Login"
	lableUser:    String  = "Username";
	lablePass:    String  = "Password";
	buttonLogin:  String  = "Login";
	buttonCancel: String  = "Cancel";
	color:        String  = "primary";
	remember:     Boolean = false;
	
	db: String = "";
	user: String = "";
	pass: String = "";
	
	saved_dbs = [];
	
	constructor(
		public dialogRef: MdDialogRef
	) {}	
	
	ngAfterViewInit() {
		let data = this.load();
		this.saved_dbs = Object.values( data );
		if( data[ this.user+this.db ] ) {
			this.remember = true;
		} 
	}
	
	submitLogin() {
		if(this.remember) this.save(); else this.remove();
		this.dialogRef.close({ db: this.db, user: this.user, pass: this.pass });
	}
	
	
	private save(){
		let data = this.load();
		let key = this.user+this.db;
		data[ key ] = {db:this.db,user:this.user,pass:this.pass}
		localStorage.setItem( 'loginDatas', JSON.stringify( data ) );
	}
	private remove() {
		let data = this.load();
		let key = this.user+this.db;
		delete data[ key ];
		localStorage.setItem( 'loginDatas', JSON.stringify( data ) );
	}
	private load() {
		let data = localStorage.loginDatas || '{}';
		return JSON.parse( data );
	}
}


@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule, FormsModule, PipeModules ],
	declarations: [ LoginModalComponent ],
	exports: [ LoginModalComponent ],
	entryComponents: [ LoginModalComponent ]
})
export class LoginModalModule {}