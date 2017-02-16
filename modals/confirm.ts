import { NgModule, Component }            from '@angular/core';
import { MaterialModule, MdDialogRef }    from '@angular/material';
import { FlexLayoutModule }               from '@angular/flex-layout';
import { CommonModule }                   from '@angular/common';


@Component({
	styles: [ `md-dialog-content { min-width: 300px; text-align: center }`,
			  `md-dialog-actions {text-align:right}`,
			  `md-dialog-content .td { vertical-align:center }`,
			  `.dialog-icon { font-size: 44px; margin-right: 30px } `
			  ],
	template: `
		<div fxLayout>
			<h2 fxFlex md-dialog-title> {{ title }} </h2>
			<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>
		</div>
		<md-dialog-content>
			<table><tr>
				<td> <md-icon [color]="color" class="dialog-icon" *ngIf="icon">{{ icon }}</md-icon></td>
				<td>{{ message }}</td>
			</tr></table>
		</md-dialog-content>
		<md-dialog-actions> 
			<button md-button md-dialog-close> {{ buttonCancel }} </button>
			<button md-raised-button [color]="color" (click)="dialogRef.close('yes')"> {{ buttonOk }} </button> 
		</md-dialog-actions>
	`
})
export class ConfirmModalComponent {
	title = "Confirm";
	icon = "help_outline";
	message = "Are you sure ?";
	buttonCancel = "No";
	buttonOk = "Agree";
	color = "primary"; // default, primary, accent, warn
	
	constructor(
		public dialogRef: MdDialogRef
	){}
}


@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule ],
	declarations: [ ConfirmModalComponent ],
	entryComponents: [ ConfirmModalComponent ]
})
export class ConfirmModalModule {}