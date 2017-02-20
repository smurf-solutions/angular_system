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
var material_1 = require('@angular/material');
var router_1 = require('@angular/router');
var modals_1 = require('@sys/modals');
var AuthService = (function () {
    function AuthService(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        var first = Object.values(JSON.parse(localStorage.loginDatas || '{}')).shift();
        if (first) {
            this.dbUrl = first.db;
            this.user = first.user;
            this.pass = first.pass;
        }
    }
    AuthService.prototype.getToken = function () {
        var token = [this.user, this.pass];
        return btoa(JSON.stringify(token));
    };
    AuthService.prototype.loginModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(modals_1.LoginModalComponent);
        dialogRef.componentInstance.user = this.user;
        dialogRef.componentInstance.pass = this.pass;
        dialogRef.componentInstance.db = this.dbUrl;
        return dialogRef.afterClosed().do(function (res) {
            if (res) {
                _this.user = res.user;
                _this.pass = res.pass;
                _this.dbUrl = res.db;
            }
            else {
                _this.routeToHome();
            }
        });
    };
    AuthService.prototype.routeToHome = function () {
        this.router.navigateByUrl('/Home');
    };
    AuthService = __decorate([
        core_1.Component({
            providers: [router_1.Router]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [material_1.MdDialog, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
