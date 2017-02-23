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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ng2_toasty_1 = require('ng2-toasty');
var services_1 = require('@sys/services');
var services_2 = require('@sys/services');
var services_3 = require('@sys/services');
var CollectionsService = (function () {
    function CollectionsService(auth, http, toasty, on, lang) {
        var _this = this;
        this.auth = auth;
        this.http = http;
        this.toasty = toasty;
        this.on = on;
        this.lang = lang;
        this.cache = {};
        this.on.loginChanged.subscribe(function (res) { return _this.cache = {}; });
    }
    CollectionsService.prototype.handleError = function (error) {
        console.log(error);
    };
    CollectionsService.prototype.handleMessages = function (res) {
        if (res.success) {
            this.toasty.success(this.lang.translate("Saved successfully", 'messages'));
        }
        else if (res.error) {
            this.toasty.error(this.lang.translate("Cannot save", 'messages'));
        }
        if (res.msg) {
            switch (res.msg.type) {
                case 'success':
                    this.toasty.success(this.lang.translate(res.msg, 'messages'));
                    break;
                case 'error':
                    this.toasty.error(this.lang.translate(res.msg, 'messages'));
                    break;
                case 'warning':
                    this.toasty.warning(this.lang.translate(res.msg, 'messages'));
                    break;
                case 'wait':
                    this.toasty.wait(this.lang.translate(res.msg, 'messages'));
                    break;
                default: this.toasty.info(this.lang.translate(res.msg, 'messages'));
            }
        }
    };
    CollectionsService.prototype.load = function (db, collection) {
        var _this = this;
        var options = { headers: { token: this.auth.getToken() } };
        return this.http.get(db + collection, options).map(function (res) { return res.json(); })
            .catch(function (err) { return _this.toasty.error({ title: _this.lang.translate('Connection error', 'messages'), msg: err.status + ' ' + err.statusText }); })
            .do(function (res) {
            if (res.access && res.access == 'DENIDED') {
                _this.toasty.error(_this.lang.translate('Access DENIDED', 'messages'));
            }
        });
    };
    CollectionsService.prototype.get = function (collection, where) {
        if (!this.cache[collection]) {
            return this.load(this.auth.dbUrl, collection);
        }
        else {
            return Observable_1.Observable.of(this.cache[collection]);
        }
    };
    CollectionsService.prototype.post = function (collection, data, where) {
        var _this = this;
        return this.http.post(this.auth.dbUrl + collection, data)
            .map(function (res) { return res.json(); })
            .do(function (res) { _this.handleMessages(res); })
            .catch(this.handleError);
    };
    CollectionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.AuthService !== 'undefined' && services_1.AuthService) === 'function' && _a) || Object, http_1.Http, ng2_toasty_1.ToastyService, (typeof (_b = typeof services_2.EventsService !== 'undefined' && services_2.EventsService) === 'function' && _b) || Object, (typeof (_c = typeof services_3.LanguageService !== 'undefined' && services_3.LanguageService) === 'function' && _c) || Object])
    ], CollectionsService);
    return CollectionsService;
    var _a, _b, _c;
}());
exports.CollectionsService = CollectionsService;
