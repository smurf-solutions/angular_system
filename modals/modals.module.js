"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var material_1 = require('@angular/material');
var core_1 = require('@angular/core');
var invoice_dialog_component_js_1 = require('./invoice-dialog.component.js');
var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message, viewContainerRef) {
        var dialogRef;
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(invoice_dialog_component_js_1.InvoiceDialogComponent, config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [material_1.MdDialog])
    ], DialogsService);
    return DialogsService;
}());
exports.DialogsService = DialogsService;
var core_2 = require('@angular/core');
var material_2 = require('@angular/material');
var DialogsModule = (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        core_2.NgModule({
            providers: [DialogsService],
            imports: [material_2.MaterialModule.forRoot()],
            exports: [
                invoice_dialog_component_js_1.InvoiceDialogComponent,
            ],
            declarations: [
                invoice_dialog_component_js_1.InvoiceDialogComponent,
            ],
            entryComponents: [
                invoice_dialog_component_js_1.InvoiceDialogComponent,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogsModule);
    return DialogsModule;
}());
exports.DialogsModule = DialogsModule;
