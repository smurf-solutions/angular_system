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
var events_service_js_1 = require('./events.service.js');
exports.EventsService = events_service_js_1.EventsService;
var language_service_js_1 = require('./language.service.js');
exports.LanguageService = language_service_js_1.LanguageService;
var auth_service_js_1 = require('./auth.service.js');
exports.AuthService = auth_service_js_1.AuthService;
var progress_service_js_1 = require('./progress.service.js');
exports.ProgressService = progress_service_js_1.ProgressService;
var sys_service_js_1 = require('./sys.service.js');
exports.SysService = sys_service_js_1.SysService;
var collections_service_js_1 = require('./collections.service.js');
exports.CollectionsService = collections_service_js_1.CollectionsService;
var query_service_js_1 = require('./query.service.js');
exports.QueryService = query_service_js_1.QueryService;
var core_1 = require('@angular/core');
var services_1 = require('@sys/services');
var SysServicesModule_0 = (function () {
    function SysServicesModule_0() {
    }
    SysServicesModule_0 = __decorate([
        core_1.NgModule({ providers: [
                services_1.LanguageService,
                services_1.EventsService
            ] }), 
        __metadata('design:paramtypes', [])
    ], SysServicesModule_0);
    return SysServicesModule_0;
}());
exports.SysServicesModule_0 = SysServicesModule_0;
var SysServicesModule_1 = (function () {
    function SysServicesModule_1() {
    }
    SysServicesModule_1 = __decorate([
        core_1.NgModule({ providers: [
                services_1.AuthService,
                services_1.ProgressService,
                services_1.SysService
            ] }), 
        __metadata('design:paramtypes', [])
    ], SysServicesModule_1);
    return SysServicesModule_1;
}());
exports.SysServicesModule_1 = SysServicesModule_1;
var SysServicesModule_2 = (function () {
    function SysServicesModule_2() {
    }
    SysServicesModule_2 = __decorate([
        core_1.NgModule({ providers: [
                services_1.CollectionsService
            ] }), 
        __metadata('design:paramtypes', [])
    ], SysServicesModule_2);
    return SysServicesModule_2;
}());
exports.SysServicesModule_2 = SysServicesModule_2;
