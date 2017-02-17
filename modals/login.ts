import { NgModule, Component }          from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { MaterialModule, MdDialogRef }  from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { FormsModule }                  from '@angular/forms';


@Component({
	selector: 'login-form',
	styles: [`
		md-dialog-content {height:100%; width:330px}
		md-input, md-select { width: 100% }
		button[md-button], button[md-raised-button] {  }
	`],
	template: `
		<div fxLayout>
			<h2 fxFlex md-dialog-title> {{ title }} </h2>
			<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>
		</div>
		<md-dialog-content>
			<div><md-input [(ngModel)]="db" placeholder="Databes URL" autofocus (keyup.enter)="submitLogin()"></md-input></div>
				<br>&nbsp;<br>
			<div> <md-input [(ngModel)]="user" type="text" name="username" placeholder="{{ lableUser }}" (keyup.enter)="submitLogin()"></md-input> </div>
			<div> <md-input [(ngModel)]="pass" type="password" name="password" placeholder="{{ lablePass }}" (keyup.enter)="submitLogin()"></md-input> </div>
		</md-dialog-content>
		<md-dialog-actions> 
			<button md-raised-button color="{{ color }}" (click)="submitLogin()"> {{ buttonLogin }} </button> 
			<button md-button md-dialog-close color="warn"> {{ buttonCancel }} </button>
			<!-- <div style="float:right">
				<button md-raised-button color="warn">Logout</button>
			</div> -->
		</md-dialog-actions>
	`
})
export class LoginModalComponent {
	title = "Login"
	lableUser = "Username";
	lablePass = "Password";
	buttonLogin = "Login";
	buttonCancel = "Cancel";
	color = "primary";
	
	db = "";
	user = "";
	pass = "";
	
	constructor(
		public dialogRef: MdDialogRef
	) {}
	
	submitLogin() {
		this.dialogRef.close({ db: this.db, user: this.user, pass: this.pass });
	}
}

@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule, FormsModule ],
	declarations: [ LoginModalComponent ],
	exports: [ LoginModalComponent ],
	entryComponents: [ LoginModalComponent ]
})
export class LoginModalModule {}