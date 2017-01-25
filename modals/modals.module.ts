import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

import { InvoiceDialogComponent }   from './invoice-dialog.component.js';

@Injectable()
export class DialogsService {
    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
		//public confirm(title, message, viewContainerRef) {
        let dialogRef: MdDialogRef<InvoiceDialogComponent>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(InvoiceDialogComponent, config);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}

/*****************************************/

import { NgModule }        from '@angular/core';
import { MaterialModule }  from '@angular/material';


@NgModule({
    providers: [ DialogsService ],
	imports:   [ MaterialModule.forRoot() ],
	exports:   [
        InvoiceDialogComponent,
	],
    declarations: [
        InvoiceDialogComponent,
    ],
    entryComponents: [
        InvoiceDialogComponent,
    ]
})
export class DialogsModule { }
