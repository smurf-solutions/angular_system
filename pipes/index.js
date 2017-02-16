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
var search_js_1 = require('./search.js');
var dump_js_1 = require('./dump.js');
var getValueOfType_js_1 = require('./getValueOfType.js');
var orderBy_js_1 = require('./orderBy.js');
var highlight_js_1 = require('./highlight.js');
var PipeModules = (function () {
    function PipeModules() {
    }
    PipeModules = __decorate([
        core_1.NgModule({
            imports: [search_js_1.SearchModule, dump_js_1.DumpModule, getValueOfType_js_1.getValueOfTypeModule, orderBy_js_1.OrderByModule, highlight_js_1.HighlightModule],
            exports: [search_js_1.SearchModule, dump_js_1.DumpModule, getValueOfType_js_1.getValueOfTypeModule, orderBy_js_1.OrderByModule, highlight_js_1.HighlightModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PipeModules);
    return PipeModules;
}());
exports.PipeModules = PipeModules;
