import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { MaterialModule }          from '@angular/material';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { FormsModule }             from '@angular/forms';
//import { ToastyModule }            from 'ng2-toasty';

import { PipeModules }             from '@sys/pipes';
import { AppMaterialModules }      from '@sys/material';

//import { Router }  from '@angular/router';

@NgModule({
	imports: [ 
		CommonModule,
		MaterialModule,
		MaterialModule.forRoot(),
		FlexLayoutModule,
		FormsModule,
//		ToastyModule,
//		ToastyModule.forRoot(),
		PipeModules,
		AppMaterialModules
	],
	exports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
//		ToastyModule,
		PipeModules,
		AppMaterialModules
	]
})
export class SysModules {}