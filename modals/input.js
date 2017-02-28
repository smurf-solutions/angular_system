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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
var forms_1 = require('@angular/forms');
var pipes_1 = require('@sys/pipes');
var InputModalComponent = (function () {
    function InputModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.title = "Input";
        this.placeholder = "";
        this.value = "";
        this.buttonOk = "Save";
        this.buttonCancel = "Cancel";
        this.color = "primary";
    }
    InputModalComponent = __decorate([
        core_1.Component({
            styles: [
                "md-dialog-content { min-width: 350px }",
                "md-input { width: 100% }",
                "md-dialog-actions { text-align: right }",
            ],
            template: "\n\t\t<div fxLayout>\n\t\t\t<h2 fxFlex md-dialog-title> {{ title }} </h2>\n\t\t\t<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>\n\t\t</div>\n\t\t<md-dialog-content>\n\t\t\t<md-input-container>\n\t\t\t\t<input mdInput #inputBox [(ngModel)]=\"value\" placeholder=\"{{ placeholder }}\" autofocus>\n\t\t\t</md-input-container>\n\t\t</md-dialog-content>\n\t\t<md-dialog-actions> \n\t\t\t<button md-button md-dialog-close> {{ buttonCancel }} </button>\n\t\t\t<button md-raised-button [color]=\"color\" (click)=\"dialogRef.close( inputBox.value )\"> {{ buttonOk }} </button> \n\t\t</md-dialog-actions>\n\t"
        }), 
        __metadata('design:paramtypes', [material_1.MdDialogRef])
    ], InputModalComponent);
    return InputModalComponent;
}());
exports.InputModalComponent = InputModalComponent;
var InputModalModule = (function () {
    function InputModalModule() {
    }
    InputModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule, forms_1.FormsModule, pipes_1.PipeModules],
            declarations: [InputModalComponent],
            entryComponents: [InputModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], InputModalModule);
    return InputModalModule;
}());
exports.InputModalModule = InputModalModule;
