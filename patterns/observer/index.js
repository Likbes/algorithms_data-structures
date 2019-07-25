"use strict";
var Observer;
(function (Observer) {
    var ConcreteSubject = /** @class */ (function () {
        function ConcreteSubject(state) {
            this.observers = [];
            this.state = state;
        }
        ConcreteSubject.prototype.attach = function (observer) {
            console.log('subject: attached an observer');
            this.observers.push(observer);
        };
        ConcreteSubject.prototype.detach = function (observer) {
            var observerIndex = this.observers.indexOf(observer);
            this.observers.splice(observerIndex, 1);
            console.log('subject: detached an observer.');
        };
        ConcreteSubject.prototype.notify = function () {
            console.log('subject: notifying observers...');
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update(this);
            }
        };
        ConcreteSubject.prototype.doBusinessLogic = function () {
            console.log('subject: doing some business logic');
            this.state = Math.floor(Math.random() * 11);
            console.log("subject: state has changed to " + this.state);
            this.notify();
        };
        return ConcreteSubject;
    }());
    var ConcreteObserverA = /** @class */ (function () {
        function ConcreteObserverA() {
        }
        ConcreteObserverA.prototype.update = function (subject) {
            if (subject.state < 3) {
                console.log('observerA reacted to change');
            }
        };
        return ConcreteObserverA;
    }());
    var ConcreteObserverB = /** @class */ (function () {
        function ConcreteObserverB() {
        }
        ConcreteObserverB.prototype.update = function (subject) {
            if (subject.state === 0 || subject.state >= 2) {
                console.log('observerB reacted to change');
            }
        };
        return ConcreteObserverB;
    }());
    var subject = new ConcreteSubject(0);
    var observerA = new ConcreteObserverA();
    subject.attach(observerA);
    var observerB = new ConcreteObserverB();
    subject.attach(observerB);
    subject.doBusinessLogic();
    subject.doBusinessLogic();
    subject.detach(observerB);
    subject.doBusinessLogic();
})(Observer || (Observer = {}));
