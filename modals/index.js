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
var login_js_1 = require('./login.js');
var alert_js_1 = require('./alert.js');
var confirm_js_1 = require('./confirm.js');
var input_js_1 = require('./input.js');
var ModalsModule = (function () {
    function ModalsModule() {
    }
    ModalsModule = __decorate([
        core_1.NgModule({
            imports: [
                login_js_1.LoginModalModule,
                alert_js_1.AlertModalModule,
                confirm_js_1.ConfirmModalModule,
                input_js_1.InputModalModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalsModule);
    return ModalsModule;
}());
exports.ModalsModule = ModalsModule;
var login_js_2 = require('./login.js');
exports.LoginModalComponent = login_js_2.LoginModalComponent;
var alert_js_2 = require('./alert.js');
exports.AlertModalComponent = alert_js_2.AlertModalComponent;
var confirm_js_2 = require('./confirm.js');
exports.ConfirmModalComponent = confirm_js_2.ConfirmModalComponent;
var input_js_2 = require('./input.js');
exports.InputModalComponent = input_js_2.InputModalComponent;
