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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var common_1 = require('@angular/common');
var ng2_toasty_1 = require('ng2-toasty');
var services_1 = require('@sys/services');
var material_1 = require('@angular/material');
var CollectionsService = (function () {
    function CollectionsService(http, toasty, router, dialog, location, route) {
        this.http = http;
        this.toasty = toasty;
        this.router = router;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.data = {};
        this.loginChangedEmitter = new core_1.EventEmitter();
        this.authService = new services_1.AuthService(this.dialog, this.router);
    }
    CollectionsService.prototype.handleError = function (error) {
        console.log(error);
    };
    CollectionsService.prototype.handleMessages = function (res) {
        if (res.success) {
            this.toasty.success("Записът е успеше");
        }
        else if (res.error) {
            this.toasty.error("Не може да се запише");
        }
        if (res.msg) {
            switch (res.msg.type) {
                case 'success':
                    this.toasty.success(res.msg);
                    break;
                case 'error':
                    this.toasty.error(res.msg);
                    break;
                case 'warning':
                    this.toasty.warning(res.msg);
                    break;
                case 'wait':
                    this.toasty.wait(res.msg);
                    break;
                default: this.toasty.info(res.msg);
            }
        }
    };
    CollectionsService.prototype.load = function (db, collection) {
        var _this = this;
        var options = { headers: { token: this.authService.getToken() } };
        if (this.data[collection])
            this.data[collection] = null;
        var errorCatched = false;
        return new Observable_1.Observable(function (observer) {
            _this.http.get(db + collection, options).map(function (res) { return res.json(); })
                .catch(function (err) { if (!errorCatched) {
                errorCatched = true;
                _this.authAndLoad(db, collection, observer);
            } })
                .subscribe(function (res) {
                if (res.access == 'DENIDED') {
                    _this.authAndLoad(db, collection, observer);
                }
                else {
                    _this.data[collection] = res;
                    observer.next(res);
                }
            }, function (err) { if (!errorCatched) {
                _this.authAndLoad(db, collection, observer);
                errorCatched = true;
            } }, function () { });
        });
    };
    CollectionsService.prototype.authAndLoad = function (db, collection, observer) {
        var _this = this;
        this.authService.loginModal().subscribe(function (ret) {
            if (ret)
                _this.load(_this.authService.dbUrl, collection).subscribe(function (res) { if (observer)
                    observer.next(res); });
        });
    };
    CollectionsService.prototype.resetData = function () {
        var _this = this;
        this.authService.loginModal().subscribe(function (res) {
            if (res) {
                _this.data = {};
                _this.loginChangedEmitter.emit();
            }
        });
    };
    CollectionsService.prototype.get = function (collection, where) {
        if (!this.data[collection]) {
            return this.load(this.authService.dbUrl, collection);
        }
        else {
            return Observable_1.Observable.of(this.data[collection]);
        }
    };
    CollectionsService.prototype.post = function (collection, data, where) {
        var _this = this;
        return this.http.post(this.authService.dbUrl + collection, data)
            .map(function (res) { return res.json(); })
            .do(function (res) { _this.handleMessages(res); })
            .catch(this.handleError);
    };
    CollectionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, ng2_toasty_1.ToastyService, router_1.Router, material_1.MdDialog, common_1.Location, router_1.ActivatedRoute])
    ], CollectionsService);
    return CollectionsService;
}());
exports.CollectionsService = CollectionsService;
