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
var getValueOfTypePipe = (function () {
    function getValueOfTypePipe() {
    }
    getValueOfTypePipe.prototype.transform = function (input, type) {
        var ret = null;
        if (input instanceof Array) {
            input.forEach(function (k, v) {
                if (k == type)
                    ret = v;
            });
        }
        return ret;
    };
    getValueOfTypePipe = __decorate([
        core_1.Pipe({
            name: 'getValueOfType'
        }), 
        __metadata('design:paramtypes', [])
    ], getValueOfTypePipe);
    return getValueOfTypePipe;
}());
exports.getValueOfTypePipe = getValueOfTypePipe;
var getValueOfTypeModule = (function () {
    function getValueOfTypeModule() {
    }
    getValueOfTypeModule = __decorate([
        core_1.NgModule({
            declarations: [getValueOfTypePipe],
            exports: [getValueOfTypePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], getValueOfTypeModule);
    return getValueOfTypeModule;
}());
exports.getValueOfTypeModule = getValueOfTypeModule;
