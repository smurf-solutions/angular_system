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
var core_2 = require('@angular/core');
var material_1 = require('@angular/material');
var modals_1 = require('@sys/modals');
var services_1 = require('@sys/services');
var AuthService = (function () {
    function AuthService(dialog, events) {
        this.dialog = dialog;
        this.events = events;
        this.onLoginChanged = new core_2.EventEmitter();
        this.restoreLastLogin();
    }
    AuthService.prototype.storeLastLogin = function () {
        var l = { dbUrl: this.dbUrl, user: this.user, pass: this.encode(this.pass) };
        localStorage.setItem('lastAccess', this.encode(JSON.stringify(l)));
    };
    AuthService.prototype.restoreLastLogin = function () {
        try {
            var l = JSON.parse(this.decode(localStorage.getItem('lastAccess')));
            this.dbUrl = l.dbUrl;
            this.user = l.user;
            this.pass = this.decode(l.pass);
        }
        catch (err) { }
    };
    AuthService.prototype.encode = function (str) {
        return window.btoa(escape(encodeURIComponent(str)));
    };
    AuthService.prototype.decode = function (str) {
        try {
            return decodeURIComponent(unescape(window.atob(str)));
        }
        catch (err) {
            return '';
        }
    };
    AuthService.prototype.getHeader = function () {
        var token = btoa(this.user + ':' + this.pass);
        return { headers: { Authorization: 'Basic ' + token } };
    };
    AuthService.prototype.loginModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(modals_1.LoginModalComponent);
        dialogRef.componentInstance.user = this.user;
        dialogRef.componentInstance.pass = this.pass;
        dialogRef.componentInstance.db = this.dbUrl;
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.user = res.user;
                _this.pass = res.pass;
                _this.dbUrl = res.db;
                _this.storeLastLogin();
                _this.events.loginChanged.emit();
            }
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [material_1.MdDialog, (typeof (_a = typeof services_1.EventsService !== 'undefined' && services_1.EventsService) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
exports.AuthService = AuthService;
