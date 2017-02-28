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
var services_4 = require('@sys/services');
var CollectionsService = (function () {
    function CollectionsService(auth, http, toasty, events, lang, progress) {
        var _this = this;
        this.auth = auth;
        this.http = http;
        this.toasty = toasty;
        this.events = events;
        this.lang = lang;
        this.progress = progress;
        this.cache = {};
        this.events.loginChanged.subscribe(function (res) { return _this.cache = {}; });
    }
    CollectionsService.prototype.handleError = function (err) {
        this.toasty.error({ title: this.lang.translate('Connection error', 'messages'), msg: err.status + ' ' + err.statusText });
        if (err.status == 0 && err.type == 3)
            this.progress.requests = 0;
    };
    CollectionsService.prototype.handleMessages = function (res) {
        if (res.success) {
            this.toasty.success(this.lang.translate("Modified records", "messages") + ": " + res.success);
        }
        else if (res.error) {
            this.toasty.error(this.lang.translate("Cannot save", 'messages'));
            console.error(res.error);
        }
        else if (typeof res.success !== 'undefined') {
            this.toasty.info(this.lang.translate('No records modified', 'messages'));
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
    CollectionsService.prototype.load = function (url) {
        var _this = this;
        return this.http.get(url, this.auth.getHeader()).map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); })
            .do(function (res) {
            if (res.access && res.access == 'DENIDED') {
                _this.toasty.error(_this.lang.translate('Access DENIDED', 'messages'));
            }
        });
    };
    CollectionsService.prototype.get = function (collection, urlParams) {
        if (typeof urlParams == 'object')
            urlParams = JSON.stringify(urlParams);
        var url = this.auth.dbUrl + collection + (urlParams ? "?find=" + urlParams : "");
        if (!this.cache[url]) {
            return this.load(url, collection);
        }
        else {
            return Observable_1.Observable.of(this.cache[url]);
        }
    };
    CollectionsService.prototype.post = function (collection, data, urlParams) {
        var _this = this;
        if (typeof urlParams == 'object')
            urlParams = JSON.stringify(urlParams);
        var url = this.auth.dbUrl + collection + (urlParams ? '?update=' + urlParams : "");
        if (data._id && !data.$set) {
            data = { _id: data._id, $set: data };
            delete data.$set._id;
        }
        return this.http.post(url, data, this.auth.getHeader())
            .catch(function (err) { return _this.handleError(err); })
            .map(function (res) { return res.json(); })
            .do(function (res) { _this.handleMessages(res); });
    };
    CollectionsService.prototype.remove = function (collection, urlParams) {
        var _this = this;
        if (typeof urlParams == 'object')
            urlParams = JSON.stringify(urlParams);
        var url = this.auth.dbUrl + collection + '?remove=' + urlParams;
        return this.http.delete(url, this.auth.getHeader())
            .catch(function (err) { return _this.handleError(err); })
            .map(function (res) { return res.json(); })
            .do(function (res) { return _this.handleMessages(res); });
    };
    CollectionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.AuthService !== 'undefined' && services_1.AuthService) === 'function' && _a) || Object, http_1.Http, ng2_toasty_1.ToastyService, (typeof (_b = typeof services_2.EventsService !== 'undefined' && services_2.EventsService) === 'function' && _b) || Object, (typeof (_c = typeof services_3.LanguageService !== 'undefined' && services_3.LanguageService) === 'function' && _c) || Object, (typeof (_d = typeof services_4.ProgressService !== 'undefined' && services_4.ProgressService) === 'function' && _d) || Object])
    ], CollectionsService);
    return CollectionsService;
    var _a, _b, _c, _d;
}());
exports.CollectionsService = CollectionsService;
