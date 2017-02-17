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
var LanguageService = (function () {
    function LanguageService(http) {
        this.http = http;
        this.lang = "bg";
        this.getDictionary();
    }
    LanguageService.prototype.getDictionary = function () {
        var _this = this;
        if (!this.dictionary)
            this.http.get("i18n/" + this.lang + ".json")
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.dictionary = res;
            });
    };
    LanguageService.prototype.translate = function (word, scope) {
        if (scope === void 0) { scope = "�"; }
        if (this.dictionary && this.dictionary[scope] && this.dictionary[scope][word]) {
            return this.dictionary[scope][word];
        }
        else {
            return word;
        }
    };
    LanguageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LanguageService);
    return LanguageService;
}());
exports.LanguageService = LanguageService;
