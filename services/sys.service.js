"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SysService = (function () {
    function SysService() {
        this.storage = {};
    }
    SysService.prototype.store = function (obj, key, exclude) {
        var _this = this;
        this.storage[key] = this.storage[key] || {};
        if (!exclude) {
            this.storage[key] = obj;
        }
        else {
            exclude = exclude || [];
            var methods = Object.keys(obj);
            methods.forEach(function (method) {
                if (!(obj[method] instanceof AppService))
                    if (exclude.indexOf(method) == -1)
                        _this.storage[key][method] = obj[method];
            });
        }
    };
    SysService.prototype.restore = function (obj, key) {
        var _this = this;
        if (this.storage[key]) {
            var methods = Object.keys(this.storage[key]);
            methods.forEach(function (method) { return obj[method] = _this.storage[key][method]; });
        }
    };
    return SysService;
}());
SysService = __decorate([
    core_1.Injectable()
], SysService);
exports.SysService = SysService;
