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
var services_1 = require('@sys/services');
var DumpPipe = (function () {
    function DumpPipe(app) {
        this.app = app;
    }
    DumpPipe.prototype.transform = function (items, obj) {
        if (items && obj) {
            obj.dump = items;
        }
        return items;
    };
    DumpPipe = __decorate([
        core_1.Pipe({
            name: 'dump'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.SysService !== 'undefined' && services_1.SysService) === 'function' && _a) || Object])
    ], DumpPipe);
    return DumpPipe;
    var _a;
}());
exports.DumpPipe = DumpPipe;
var DumpModule = (function () {
    function DumpModule() {
    }
    DumpModule = __decorate([
        core_1.NgModule({
            declarations: [DumpPipe],
            exports: [DumpPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], DumpModule);
    return DumpModule;
}());
exports.DumpModule = DumpModule;
