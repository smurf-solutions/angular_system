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
var material_1 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
var common_1 = require('@angular/common');
var AlertModalComponent = (function () {
    function AlertModalComponent() {
        this.title = 'Alert';
        this.icon = 'info_outline';
        this.message = 'Message';
        this.button = 'Ok';
        this.color = 'primary';
    }
    AlertModalComponent = __decorate([
        core_1.Component({
            styles: ["md-dialog-content { min-width: 300px; text-align: center }",
                "md-dialog-actions {text-align:right}",
                ".dialog-icon { font-size: 44px; margin-right: 30px } "],
            template: "\n\t\t<div fxLayout>\n\t\t\t<h2 fxFlex md-dialog-title> {{ title }} </h2>\n\t\t</div>\n\t\t<md-dialog-content class=\"alert-dialog\">\n\t\t\t<table><tr>\n\t\t\t\t<td> <md-icon [color]=\"color\" class=\"dialog-icon\" *ngIf=\"icon\">{{ icon }}</md-icon></td>\n\t\t\t\t<td>{{ message }}</td>\n\t\t\t</tr></table>\n\t\t</md-dialog-content>\n\t\t<md-dialog-actions> \n\t\t\t<button md-raised-button [color]=\"color\" md-dialog-close> {{ button }} </button> \n\t\t</md-dialog-actions>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AlertModalComponent);
    return AlertModalComponent;
}());
exports.AlertModalComponent = AlertModalComponent;
var AlertModalModule = (function () {
    function AlertModalModule() {
    }
    AlertModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule],
            declarations: [AlertModalComponent],
            entryComponents: [AlertModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertModalModule);
    return AlertModalModule;
}());
exports.AlertModalModule = AlertModalModule;
