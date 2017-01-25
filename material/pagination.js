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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.activeChange = new core_2.EventEmitter();
    }
    PaginationComponent.prototype.getPagesAsArray = function () {
        var arrOfPages = [];
        for (var i = 1; i <= this.pages; i++)
            arrOfPages.push(i);
        return arrOfPages;
    };
    PaginationComponent.prototype.setActive = function (a) {
        this.active = a;
        this.activeChange.emit(a);
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "activeChange", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            moduleId: module.id,
            styles: ['button[md-raised-button] { box-shadow:none!important; }',
                'button:not(.active) { background:transparent!important; color: #333 }'],
            template: " <div>\n\t\t\t\t\t<button *ngFor=\"let p of getPagesAsArray()\" md-raised-button color=\"primary\"\n\t\t\t\t\t\t[class.active]=\"p==active\"\n\t\t\t\t\t\t(click)=\"setActive(p)\"\n\t\t\t\t\t>{{ p }}</button>\n\t\t\t\t</div>",
            inputs: ['active', 'pages']
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, material_1.MaterialModule],
            declarations: [PaginationComponent],
            exports: [PaginationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationModule);
    return PaginationModule;
}());
exports.PaginationModule = PaginationModule;
