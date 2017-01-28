import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { NotFoundComponent }   from './not-found.component.js';


@NgModule( {
    imports: [ RouterModule.forChild([{ path:'', component: NotFoundComponent }]) ],
    declarations: [ NotFoundComponent ],
	exports: [ NotFoundComponent ]
})
export class NotFoundModule {}
