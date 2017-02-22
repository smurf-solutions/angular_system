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
var auth_service_js_1 = require('./auth.service.js');
exports.AuthService = auth_service_js_1.AuthService;
var sys_service_js_1 = require('./sys.service.js');
exports.SysService = sys_service_js_1.SysService;
var collections_service_js_1 = require('./collections.service.js');
exports.CollectionsService = collections_service_js_1.CollectionsService;
var language_service_js_1 = require('./language.service.js');
exports.LanguageService = language_service_js_1.LanguageService;
var events_service_js_1 = require('./events.service.js');
exports.EventsService = events_service_js_1.EventsService;
var toast_service_js_1 = require('./toast.service.js');
exports.ToastService = toast_service_js_1.ToastService;
var core_1 = require('@angular/core');
var services_1 = require('@sys/services');
var SysServicesModule = (function () {
    function SysServicesModule() {
    }
    SysServicesModule = __decorate([
        core_1.NgModule({
            providers: [
                services_1.SysService,
                services_1.CollectionsService,
                services_1.LanguageService,
                services_1.EventsService,
                services_1.ToastService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SysServicesModule);
    return SysServicesModule;
}());
exports.SysServicesModule = SysServicesModule;
