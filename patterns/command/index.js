"use strict";
var CommandPattern;
(function (CommandPattern) {
    // concrete commands
    var SimpleCommand = /** @class */ (function () {
        function SimpleCommand(payload) {
            this.payload = payload;
        }
        SimpleCommand.prototype.execute = function () {
            console.log("simple command: print " + this.payload);
        };
        return SimpleCommand;
    }());
    var ComplexCommand = /** @class */ (function () {
        function ComplexCommand(receiver, a, b) {
            this.receiver = receiver;
            this.a = a;
            this.b = b;
        }
        ComplexCommand.prototype.execute = function () {
            console.log("complex command:  stuff by receiver object");
            this.receiver.doSomething(this.a);
            this.receiver.doSomethingElse(this.b);
        };
        return ComplexCommand;
    }());
    // important business logic
    var Receiver = /** @class */ (function () {
        function Receiver() {
        }
        Receiver.prototype.doSomething = function (a) {
            console.log("Receiver: working with " + a);
        };
        Receiver.prototype.doSomethingElse = function (b) {
            console.log("Receiver: also working with " + b);
        };
        return Receiver;
    }());
    // send request to command
    var Invoker = /** @class */ (function () {
        function Invoker() {
        }
        Invoker.prototype.setOnStart = function (command) {
            this.onStart = command;
        };
        Invoker.prototype.setOnFinish = function (command) {
            this.onFinish = command;
        };
        Invoker.prototype.doSomethingImportant = function () {
            console.log('Invoker: do smth before i begin?');
            if (this.isCommand(this.onStart)) {
                this.onStart.execute();
            }
            console.log('Invoker: doing smth important');
            console.log('Invoker: do smth after finish?');
            if (this.isCommand(this.onFinish)) {
                this.onFinish.execute();
            }
        };
        Invoker.prototype.isCommand = function (object) {
            return object.execute !== undefined;
        };
        return Invoker;
    }());
    var invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand('Hi!'));
    var receiver = new Receiver();
    invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
    invoker.doSomethingImportant();
})(CommandPattern || (CommandPattern = {}));
