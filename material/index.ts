import { NgModule }   from '@angular/core';
//import {SelectModule} from 'angular2-select';

import { PaginationModule } from './pagination.js';
//import { SelectModule } from './select2/angular2-select.js';


@NgModule({
	imports: [ PaginationModule ],
	exports: [ PaginationModule ]
})
export class AppMaterialModules {}