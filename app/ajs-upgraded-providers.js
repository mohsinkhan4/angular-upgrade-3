"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteParams = (function () {
    function RouteParams() {
    }
    return RouteParams;
}());
exports.RouteParams = RouteParams;
function routeParamsFactory(i) {
    return i.get('$routeParams');
}
exports.routeParamsFactory = routeParamsFactory;
exports.routeParamsProvider = {
    provide: RouteParams,
    useFactory: routeParamsFactory,
    deps: ['$injector']
};
//# sourceMappingURL=ajs-upgraded-providers.js.map