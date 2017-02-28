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
var ProgressService = (function () {
    function ProgressService() {
        this.requests = 0;
        var obj = this;
        var XMLHttpRequest_originalOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
            obj.requests++;
            this.addEventListener('load', function () {
                if (obj.requests > 0)
                    obj.requests--;
            });
            XMLHttpRequest_originalOpen.apply(this, arguments);
        };
    }
    ProgressService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProgressService);
    return ProgressService;
}());
exports.ProgressService = ProgressService;
