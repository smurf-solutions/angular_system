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
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (input, property, type) {
        if (type === void 0) { type = 'asc'; }
        if (!Array.isArray(input) || typeof property !== 'string')
            return input;
        var sign = (type == 'asc' ? 1 : -1);
        var props = property.split(".");
        return input.sort(function (a, b) {
            if (props.length == 1) {
                var aa = a[props[0]], bb = b[props[0]];
            }
            else if (props.length == 2) {
                var aa = a[props[0]] ? a[props[0]][props[1]] : '', bb = b[props[0]] ? b[props[0]][props[1]] : '';
            }
            else if (props.length == 3) {
                var aa = a[props[0]] && a[props[0]][props[1]] ? a[props[0]][props[1]][props[2]] : '', bb = b[props[0]] && b[props[0]][props[1]] ? b[props[0]][props[1]][props[2]] : '';
            }
            else if (props.length == 4) {
                var aa = a[props[0]] && a[props[0]][props[1]] && a[props[0]][props[1]][props[2]] ? a[props[0]][props[1]][props[2]][props[3]] : '', bb = b[props[0]] && b[props[0]][props[1]] && b[props[0]][props[1]][props[2]] ? b[props[0]][props[1]][props[2]][props[3]] : '';
            }
            else if (props.length == 5) {
                var aa = a[props[0]] && a[props[0]][props[1]] && a[props[0]][props[1]][props[2]] && a[props[0]][props[1]][props[2]][props[3]] ? a[props[0]][props[1]][props[2]][props[3]][props[4]] : '', bb = b[props[0]] && b[props[0]][props[1]] && b[props[0]][props[1]][props[2]] && b[props[0]][props[1]][props[2]][props[3]] ? b[props[0]][props[1]][props[2]][props[3]][props[4]] : '';
            }
            if (!aa)
                aa = '';
            if (!bb)
                bb = '';
            if ((isNaN(parseFloat(aa)) || !isFinite(aa)) || (isNaN(parseFloat(bb)) || !isFinite(bb))) {
                if (aa.toString().toLowerCase() < bb.toString().toLowerCase())
                    return -1 * sign;
                if (aa.toString().toLowerCase() > bb.toString().toLowerCase())
                    return 1 * sign;
            }
            else {
                if (parseFloat(aa) < parseFloat(bb))
                    return -1 * sign;
                if (parseFloat(aa) > parseFloat(bb))
                    return 1 * sign;
            }
            return 0;
        });
    };
    OrderByPipe = __decorate([
        core_1.Pipe({ name: 'orderBy', pure: false }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
var OrderByModule = (function () {
    function OrderByModule() {
    }
    OrderByModule = __decorate([
        core_1.NgModule({
            declarations: [OrderByPipe],
            exports: [OrderByPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByModule);
    return OrderByModule;
}());
exports.OrderByModule = OrderByModule;
