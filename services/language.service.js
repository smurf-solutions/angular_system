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
var ng2_toasty_1 = require('ng2-toasty');
var Dictionaries = require('i18n.js');
var LanguageService = (function () {
    function LanguageService(http, toasty) {
        this.http = http;
        this.toasty = toasty;
        this.lang = localStorage.getItem('lang') || Object.keys(Dictionaries)[0];
        this.avaibleDictionaries = this.getAvaibleDictionaries();
    }
    LanguageService.prototype.getAvaibleDictionaries = function () {
        var ret = [];
        Object.keys(Dictionaries).forEach(function (k) {
            ret.push({ iso: k, title: Dictionaries[k]['_'].title });
        });
        return ret;
    };
    LanguageService.prototype.changeLang = function (lang) {
        localStorage.setItem('lang', lang);
        this.lang = lang;
    };
    LanguageService.prototype.translate = function (word, scope) {
        if (scope === void 0) { scope = "default"; }
        if (Array.isArray(word)) {
            var _this_1 = this, res_1 = '';
            word.forEach(function (w) { return res_1 += ' ' + _this_1.translate(w, scope); });
            return res_1.substring(1);
        }
        if (Dictionaries[this.lang]
            && Dictionaries[this.lang][scope]
            && Dictionaries[this.lang][scope][word]) {
            return Dictionaries[this.lang][scope][word];
        }
        else {
            return word;
        }
    };
    LanguageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, ng2_toasty_1.ToastyService])
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;
