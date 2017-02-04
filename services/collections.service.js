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
var CollectionsService = (function () {
    function CollectionsService(http, toasty) {
        this.http = http;
        this.toasty = toasty;
        this.data = {};
        this.db = '//localhost:3000/collections/demo/';
    }
    CollectionsService.prototype.handleError = function (error) {
        console.log(error);
        return;
    };
    CollectionsService.prototype.load = function (db, collection) {
        var _this = this;
        if (!this.data[collection])
            this.data[collection] = {};
        return this.http.get(db + collection)
            .map(function (res) { return res.json(); })
            .do(function (res) { _this.data[collection] = res; })
            .catch(this.handleError);
    };
    CollectionsService.prototype.get = function (collection, where) {
        if (!this.data[collection]) {
            return this.load(this.db, collection);
        }
        else {
            return Observable_1.Observable.of(this.data[collection]);
        }
    };
    CollectionsService.prototype.post = function (collection, data, where) {
        return this.http.post(this.db + 'collections/' + collection, data);
    };
    CollectionsService.prototype.changeDb = function (db) {
        this.db = db;
        this.data = {};
        this.toasty.info({ title: 'DB', msg: db });
    };
    CollectionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, ng2_toasty_1.ToastyService])
    ], CollectionsService);
    return CollectionsService;
}());
exports.CollectionsService = CollectionsService;
