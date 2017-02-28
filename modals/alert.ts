import { NgModule, Component }     from '@angular/core';
import { MaterialModule }          from '@angular/material';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { CommonModule }            from '@angular/common';

import { PipeModules }             from '@sys/pipes'

@Component({
	styles: [ `md-dialog-content { min-width: 300px; text-align: center }`,
			  `md-dialog-actions {text-align:right}`,
			  `.dialog-icon { font-size: 44px; margin-right: 30px } `],
	template: `
		<div fxLayout>
			<h2 fxFlex md-dialog-title> {{ title }} </h2>
		</div>
		<md-dialog-content class="alert-dialog">
			<table><tr>
				<td> <md-icon [color]="color" class="dialog-icon" *ngIf="icon">{{ icon }}</md-icon></td>
				<td>{{ message }}</td>
			</tr></table>
		</md-dialog-content>
		<md-dialog-actions> 
			<button md-raised-button [color]="color" md-dialog-close> {{ button }} </button> 
		</md-dialog-actions>
	`
})
export class AlertModalComponent {
	title = 'Alert';
	icon = 'info_outline';
	message = 'Message';
	button = 'Ok';
	color = 'primary'; // default, primary, accent, warn
}


@NgModule({
	imports: [ CommonModule, MaterialModule, FlexLayoutModule, PipeModules ],
	declarations: [ AlertModalComponent ],
	entryComponents: [ AlertModalComponent ]
})
export class AlertModalModule {}