"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var clone = Object.create(this);
        clone.component = Object.create(this.component);
        // clone object with back ref
        clone.circularReference = __assign({}, this.circularReference, { prototype: __assign({}, this) });
        return clone;
    };
    return Prototype;
}());
var ComponentWillBackReference = /** @class */ (function () {
    function ComponentWillBackReference(prototype) {
        this.prototype = prototype;
    }
    return ComponentWillBackReference;
}());
(function client() {
    var proto1 = new Prototype();
    proto1.primitive = 123;
    proto1.component = new Date();
    proto1.circularReference = new ComponentWillBackReference(proto1);
    var proto2 = proto1.clone();
    proto1.primitive === proto2.primitive
        ? console.log('Yay. primitives have been copied')
        : console.log('Nope. primitives have not been copied');
    proto1.component === proto2.component
        ? console.log('Nope. component has not been copied')
        : console.log('Yay. component has been copied');
    proto1.circularReference === proto2.circularReference
        ? console.log('Component with back reference has not been cloned.')
        : console.log('Component with back reference has been cloned');
    proto1.circularReference.prototype === proto2.circularReference.prototype
        ? console.log('Component with back reference is linked to original object')
        : console.log('Component with back reference is linked to the clone');
    console.log('proto 1', proto1, '\n proto2', proto2);
})();
