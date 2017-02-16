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
var LoginModalComponent = (function () {
    function LoginModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.title = "Login";
        this.lableUser = "Username";
        this.lablePass = "Password";
        this.buttonLogin = "Login";
        this.buttonCancel = "EXIT";
        this.color = "primary";
        this.db = "";
        this.user = "";
        this.pass = "";
    }
    LoginModalComponent.prototype.submitLogin = function () {
        this.dialogRef.close({ db: this.db, user: this.user, pass: this.pass });
    };
    LoginModalComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            styles: ["\n\t\tmd-dialog-content {height:100%; width:330px}\n\t\tmd-input, md-select { width: 100% }\n\t\tbutton[md-button], button[md-raised-button] {  }\n\t"],
            template: "\n\t\t<div fxLayout>\n\t\t\t<h2 fxFlex md-dialog-title> {{ title }} </h2>\n\t\t\t<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>\n\t\t</div>\n\t\t<md-dialog-content>\n\t\t\t<!-- <div> <md-select [(ngModel)]=\"db\" autofocus>\n\t\t\t\t<md-option selected>localhost/demo</md-option>\n\t\t\t\t<md-option> remote </md-option>\n\t\t\t</md-select> </div> -->\n\t\t\t<div><md-input [(ngModel)]=\"db\" placeholder=\"Databes URL\" autofocus></md-input></div>\n\t\t\t\t<br>&nbsp;<br>\n\t\t\t<div> <md-input [(ngModel)]=\"user\" type=\"text\" name=\"username\" placeholder=\"{{ lableUser }}\"></md-input> </div>\n\t\t\t<div> <md-input [(ngModel)]=\"pass\" type=\"password\" name=\"password\" placeholder=\"{{ lablePass }}\"></md-input> </div>\n\t\t</md-dialog-content>\n\t\t<md-dialog-actions> \n\t\t\t<button md-raised-button color=\"{{ color }}\" (click)=\"submitLogin()\"> {{ buttonLogin }} </button> \n\t\t\t<button md-button md-dialog-close color=\"warn\"> {{ buttonCancel }} </button>\n\t\t</md-dialog-actions>\n\t"
        }), 
        __metadata('design:paramtypes', [material_1.MdDialogRef])
    ], LoginModalComponent);
    return LoginModalComponent;
}());
exports.LoginModalComponent = LoginModalComponent;
var LoginModalModule = (function () {
    function LoginModalModule() {
    }
    LoginModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule, forms_1.FormsModule],
            declarations: [LoginModalComponent],
            exports: [LoginModalComponent],
            entryComponents: [LoginModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModalModule);
    return LoginModalModule;
}());
exports.LoginModalModule = LoginModalModule;
