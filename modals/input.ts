import { NgModule, Component }           from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { MaterialModule, MdDialogRef }   from '@angular/material';
import { FlexLayoutModule }              from '@angular/flex-layout';
import { FormsModule }                   from '@angular/forms';

import { PipeModules }                   from '@sys/pipes'

@Component({
	styles: [ 
		`md-dialog-content { min-width: 350px }`,
		`md-input { width: 100% }`,
		`md-dialog-actions { text-align: right }`,
	],
	template: `
		<div fxLayout>
			<h2 fxFlex md-dialog-title> {{ title }} </h2>
			<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>
		</div>
		<md-dialog-content>
			<md-input-container>
				<input mdInput #inputBox [(ngModel)]="value" placeholder="{{ placeholder }}" autofocus>
			</md-input-container>
		</md-dialog-content>
		<md-dialog-actions> 
			<button md-button md-dialog-close> {{ buttonCancel }} </button>
			<button md-raised-button [color]="color" (click)="dialogRef.close( inputBox.value )"> {{ buttonOk }} </button> 
		</md-dialog-actions>
	`
})
export class InputModalComponent {
	title = "Input";
	placeholder = "";
	value = "";
	buttonOk = "Save";
	buttonCancel = "Cancel";
	color="primary";
	
	constructor(
		public dialogRef: MdDialogRef
	) {}
}


@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule, FormsModule, PipeModules ],
	declarations: [ InputModalComponent ],
	entryComponents: [ InputModalComponent ]
})
export class InputModalModule {}
