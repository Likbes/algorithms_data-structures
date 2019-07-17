"use strict";
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.usefullMethod = function () { };
    return Singleton;
}());
function client() {
    var singleton = Singleton.getInstance();
    var alsoSingleton = Singleton.getInstance();
    if (singleton === alsoSingleton)
        console.log('singleton works');
    else
        console.log('oh god u cannot even write workable singleton');
}
client();
