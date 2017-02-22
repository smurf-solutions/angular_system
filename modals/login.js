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
var services_1 = require('@sys/services');
var LoginModalComponent = (function () {
    function LoginModalComponent(dialogRef, auth) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.title = "Login";
        this.lableUser = "Username";
        this.lablePass = "Password";
        this.buttonLogin = "Login";
        this.buttonCancel = "Cancel";
        this.color = "primary";
        this.remember = false;
        this.db = "";
        this.user = "";
        this.pass = "";
        this.saved_dbs = [];
    }
    LoginModalComponent.prototype.ngAfterViewInit = function () {
        var data = this.load();
        this.saved_dbs = Object.values(data);
        if (data[this.user + this.db]) {
            this.remember = true;
        }
    };
    LoginModalComponent.prototype.submitLogin = function () {
        this.auth.dbUrl = this.db;
        this.auth.user = this.user;
        this.auth.pass = this.pass;
        if (this.remember)
            this.save();
        else
            this.remove();
        this.dialogRef.close({ db: this.db, user: this.user, pass: this.pass });
    };
    LoginModalComponent.prototype.save = function () {
        var data = this.load();
        var key = this.user + this.db;
        data[key] = { db: this.db, user: this.user, pass: this.pass };
        localStorage.setItem('loginDatas', JSON.stringify(data));
    };
    LoginModalComponent.prototype.remove = function () {
        var data = this.load();
        var key = this.user + this.db;
        delete data[key];
        localStorage.setItem('loginDatas', JSON.stringify(data));
    };
    LoginModalComponent.prototype.load = function () {
        var data = localStorage.loginDatas || '{}';
        data = JSON.parse(data);
        return data;
    };
    LoginModalComponent.prototype.utoa = function (str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    };
    LoginModalComponent.prototype.atou = function (str) {
        return decodeURIComponent(escape(window.atob(str)));
    };
    LoginModalComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            styles: ["\n\t\tmd-dialog-content {height:100%; width:350px}\n\t\tmd-input, md-select { width: 100% }\n\t\tbutton[md-button], button[md-raised-button] {  }\n\t"],
            template: "\n\t\t<div fxLayout>\n\t\t\t<h2 fxFlex md-dialog-title><md-icon style=\"position:relative;top:3px\">lock</md-icon>&nbsp;&nbsp; {{ title|translate }} </h2>\n\t\t\t<button md-icon-button md-dialog-close><md-icon>cancel</md-icon></button>\n\t\t</div>\n\t\t<md-dialog-content>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<md-input-container fxFlex>\n\t\t\t\t\t\t<input mdInput [(ngModel)]=\"db\" placeholder=\"{{'Database'|translate}} URL\" \n\t\t\t\t\t\t\tautofocus autocomplete=\"off\" (keyup.enter)=\"submitLogin()\">\n\t\t\t\t\t</md-input-container>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button md-icon-button [mdMenuTriggerFor]=\"menu_saved_dbs\"><md-icon>arrow_drop_down</md-icon></button>\n\t\t\t\t\t\t<md-menu #menu_saved_dbs=\"mdMenu\" x-position=\"before\">\n\t\t\t\t\t\t\t<button md-button style=\"width:100%;text-align:left;margin:0.5em 0;\" \n\t\t\t\t\t\t\t\t*ngFor=\"let d of saved_dbs\"\n\t\t\t\t\t\t\t\t(click)=\"db = d.db; user = d.user; pass = d.pass; remember=true\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<div>{{ d.user }} <br> <i style=\"font-size:80%\">{{ d.db }}</i>  </div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</md-menu>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br>&nbsp;<br>\n\t\t\t<div>\n\t\t\t\t<md-input-container style=\"width:100%\">\n\t\t\t\t\t<input mdInput [(ngModel)]=\"user\" type=\"text\" name=\"username\" placeholder=\"{{ lableUser | translate }}\" \n\t\t\t\t\t\tautocomplete=\"off\" (keyup.enter)=\"submitLogin()\"> \n\t\t\t\t</md-input-container>\n\t\t\t</div>\n\t\t\t<div> \n\t\t\t\t<md-input-container style=\"width:100%\">\n\t\t\t\t\t<input mdInput [(ngModel)]=\"pass\" type=\"password\" name=\"password\" placeholder=\"{{ lablePass | translate }}\" \n\t\t\t\t\t\tautocomplete=\"off\" (keyup.enter)=\"submitLogin()\"> \n\t\t\t\t</md-input-container>\n\t\t\t</div>\n\t\t\t\n\t\t</md-dialog-content>\n\t\t<md-dialog-actions flexLayout=\"row\">\n\t\t\t<div fxFlex>\n\t\t\t\t<button md-raised-button color=\"{{ color }}\" (click)=\"submitLogin()\"> {{ buttonLogin | translate }} </button> \n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<md-checkbox [(ngModel)]=\"remember\"> {{'Remember'|translate }} </md-checkbox>\n\t\t\t</div>\n\t\t</md-dialog-actions>\n\t"
        }), 
        __metadata('design:paramtypes', [material_1.MdDialogRef, (typeof (_a = typeof services_1.AuthService !== 'undefined' && services_1.AuthService) === 'function' && _a) || Object])
    ], LoginModalComponent);
    return LoginModalComponent;
    var _a;
}());
exports.LoginModalComponent = LoginModalComponent;
var LoginModalModule = (function () {
    function LoginModalModule() {
    }
    LoginModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, material_1.MaterialModule, flex_layout_1.FlexLayoutModule, forms_1.FormsModule, pipes_1.PipeModules],
            declarations: [LoginModalComponent],
            exports: [LoginModalComponent],
            entryComponents: [LoginModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModalModule);
    return LoginModalModule;
}());
exports.LoginModalModule = LoginModalModule;
