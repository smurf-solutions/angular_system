"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//import { CompanyConfig } from '../company.config.js';
var AppService = AppService_1 = (function () {
    function AppService() {
        //public  company  = CompanyConfig;
        this.storage = {};
    }
    /**
    Store and Restore object
    */
    AppService.prototype.store = function (obj, key, exclude) {
        var _this = this;
        this.storage[key] = this.storage[key] || {};
        if (!exclude) {
            this.storage[key] = obj;
        }
        else {
            exclude = exclude || [];
            var methods = Object.keys(obj);
            methods.forEach(function (method) {
                if (!(obj[method] instanceof AppService_1))
                    if (exclude.indexOf(method) == -1)
                        _this.storage[key][method] = obj[method];
            });
        }
    };
    AppService.prototype.restore = function (obj, key) {
        var _this = this;
        if (this.storage[key]) {
            var methods = Object.keys(this.storage[key]);
            methods.forEach(function (method) { return obj[method] = _this.storage[key][method]; });
        }
    };
    return AppService;
}());
AppService = AppService_1 = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;
var AppService_1;
