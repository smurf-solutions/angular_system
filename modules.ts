import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { MaterialModule }          from '@angular/material';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { FormsModule }             from '@angular/forms';

import { PipeModules }             from '@sys/pipes';
import { AppMaterialModules }      from '@sys/material';

@NgModule({
	imports: [ 
		CommonModule,
		MaterialModule,
		MaterialModule.forRoot(),
		FlexLayoutModule,
		FormsModule,		
		PipeModules,
		AppMaterialModules
	],
	exports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		PipeModules,
		AppMaterialModules
	]
})
export class SysModules {}