"use strict";
var WithoutDependencyInversion;
(function (WithoutDependencyInversion) {
    var CarWindow = /** @class */ (function () {
        function CarWindow() {
        }
        CarWindow.prototype.open = function () {
            console.log('carWindow: open car window');
        };
        CarWindow.prototype.close = function () {
            console.log('carWindow: close car window');
        };
        return CarWindow;
    }());
    // bad practice
    var WindowSwitch = /** @class */ (function () {
        // depend on low-class
        function WindowSwitch(window) {
            this.window = window;
            this.isOn = false;
        }
        WindowSwitch.prototype.onPress = function () {
            if (this.isOn) {
                this.window.close();
                this.isOn = false;
                return;
            }
            this.window.open();
            this.isOn = true;
        };
        return WindowSwitch;
    }());
})(WithoutDependencyInversion || (WithoutDependencyInversion = {}));
var WithDependencyInversion;
(function (WithDependencyInversion) {
    var CarWindow = /** @class */ (function () {
        function CarWindow() {
        }
        CarWindow.prototype.open = function () {
            console.log('carWindow: open car window');
        };
        CarWindow.prototype.close = function () {
            console.log('carWindow: close car window');
        };
        return CarWindow;
    }());
    // bad practice
    var WindowSwitch = /** @class */ (function () {
        // depend on low-class
        function WindowSwitch(window) {
            this.window = window;
            this.isOn = false;
        }
        WindowSwitch.prototype.onPress = function () {
            if (this.isOn) {
                this.window.close();
                this.isOn = false;
                return;
            }
            this.window.open();
            this.isOn = true;
        };
        return WindowSwitch;
    }());
})(WithDependencyInversion || (WithDependencyInversion = {}));
