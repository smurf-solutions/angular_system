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
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.search = function (item, term) {
        var exists = false;
        var _this = this;
        if (typeof item === 'object') {
            Object.keys(item).forEach(function (key) {
                exists = exists || _this.search(item[key], term);
            });
        }
        exists = exists || item.toString().toLowerCase().indexOf(term) > -1;
        return exists;
    };
    SearchPipe.prototype.transform = function (items, term, keys, info) {
        if (!items || !term)
            return this.dump(items, items, info);
        term = term.toString().trim().toLowerCase();
        var that = this;
        var ret = items.filter(function (item) { return that.search(item, term); });
        return this.dump(items, ret, info);
    };
    SearchPipe.prototype.dump = function (items, ret, info) {
        if (typeof info === 'object') {
            info.all = items ? items.length : 0;
            info.founded = ret ? ret.length : 0;
        }
        return ret;
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            declarations: [SearchPipe],
            exports: [SearchPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
