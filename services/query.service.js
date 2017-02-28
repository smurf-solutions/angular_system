"use strict";
var QueryService = (function () {
    function QueryService() {
    }
    QueryService.prototype.toString = function () {
        return JSON.stringify(this.removeEmpty());
    };
    QueryService.prototype.removeEmpty = function (obj) {
        var _this = this;
        if (!obj)
            obj = this;
        var ret = {};
        Object.keys(obj).forEach(function (k) {
            if (obj[k]) {
                if (Array.isArray(obj[k])) {
                    var arr_1 = [];
                    obj[k].forEach(function (kk) {
                        if (kk) {
                            if (typeof kk == 'object') {
                                var n = _this.removeEmpty(kk);
                                var hasValues = Object.values(n).filter(function (ov) { return ov !== undefined; }).length;
                                if (hasValues)
                                    arr_1.push(n);
                            }
                            else {
                                arr_1.push(kk);
                            }
                        }
                    });
                    ret[k] = arr_1.length > 0 ? arr_1 : undefined;
                }
                else if (typeof obj[k] == 'object') {
                    ret[k] = _this.removeEmpty(obj[k]);
                }
                else {
                    ret[k] = obj[k];
                }
            }
        });
        return Object.keys(ret).length > 0 ? ret : undefined;
    };
    QueryService.prototype.flatten = function (obj) {
        if (!obj)
            obj = this;
        var result = {};
        function recurse(cur, prop) {
            if (Object(cur) !== cur) {
                result[prop] = cur;
            }
            else if (Array.isArray(cur)) {
                for (var i = 0, l = cur.length; i < l; i++)
                    recurse(cur[i], prop + "[" + i + "]");
                if (l == 0)
                    result[prop] = [];
            }
            else {
                var isEmpty = true;
                for (var p in cur) {
                    isEmpty = false;
                    recurse(cur[p], prop ? prop + "." + p : p);
                }
                if (isEmpty && prop)
                    result[prop] = {};
            }
        }
        recurse(obj, "");
        return result;
    };
    QueryService.prototype.unflatten = function (obj) {
        if (Object(obj) !== obj || Array.isArray(obj))
            return obj;
        var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g, resultholder = {};
        for (var p in obj) {
            var cur = resultholder, prop = "", m;
            while (m = regex.exec(p)) {
                cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
                prop = m[2] || m[1];
            }
            cur[prop] = obj[p];
        }
        return resultholder[""] || resultholder;
    };
    return QueryService;
}());
exports.QueryService = QueryService;
