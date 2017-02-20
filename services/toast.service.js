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
var ng2_toasty_1 = require('ng2-toasty');
var ToastService = (function () {
    function ToastService(events, toasty) {
        var _this = this;
        this.events = events;
        this.toasty = toasty;
        this.events.collectionRecieved.subscribe(function (res) { return _this.displayFromKey(res); });
    }
    ToastService.prototype.displayFromKey = function (res) {
        if (res.success)
            this.toasty.success(this.parseMsg(res.success));
        if (res.error)
            this.toasty.error(this.parseMsg(res.error));
        if (res.warning)
            this.toasty.warning(this.parseMsg(res.warning));
        if (res.wait)
            this.toasty.wait(this.parseMsg(res.wait));
        if (res.info)
            this.toasty.info(this.parseMsg(res.info));
    };
    ToastService.prototype.parseMsg = function (msg) {
        if (typeof msg == 'string')
            return { msg: msg };
        if (typeof msg == 'object')
            return msg;
    };
    ToastService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.EventsService !== 'undefined' && services_1.EventsService) === 'function' && _a) || Object, ng2_toasty_1.ToastyService])
    ], ToastService);
    return ToastService;
    var _a;
}());
exports.ToastService = ToastService;
