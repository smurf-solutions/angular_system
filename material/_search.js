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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var service_1 = require('@app/service');
var SearchComponent = (function () {
    function SearchComponent(app) {
        this.app = app;
        this.searchChange = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "searchChange", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            moduleId: module.id,
            template: "<md-input type=\"search\" placeholder=\"\u0422\u044A\u0440\u0441\u0438\" (input)=\"searchChange.emit(search)\" [(ngModel)]=\"search\">\n\t\t\t\t<span md-prefix><md-icon>search</md-icon></span>\n\t\t\t\t<span md-suffix title=\"\u041D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\" style=\"color:#aaa\">{{ searchInfo.founded }} / {{ searchInfo.all }}</span>\n\t\t\t</md-input>",
            inputs: ['searchInfo', 'search']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof service_1.AppService !== 'undefined' && service_1.AppService) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
exports.SearchComponent = SearchComponent;
var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, material_1.MaterialModule, forms_1.FormsModule],
            declarations: [SearchComponent],
            exports: [SearchComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
