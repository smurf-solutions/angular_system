import { Component, NgModule } from '@angular/core';
import { RouterModule }        from '@angular/router';

@Component({
    moduleId: module.id,
	styleUrls: [ 'not-found.css' ],
    templateUrl: 'not-found.html'
})
export class NotFoundComponent {}


@NgModule( {
    imports: [ RouterModule.forChild([{ path:'', component: NotFoundComponent }]) ],
    declarations: [ NotFoundComponent ],
	exports: [ NotFoundComponent ]
})
export class NotFoundModule {}
