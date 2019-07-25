"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var State;
(function (State_1) {
    var Context = /** @class */ (function () {
        function Context(state) {
            this.transitionTo(state);
        }
        // change state object in runtime
        Context.prototype.transitionTo = function (state) {
            console.log("context: transition to " + state.constructor.name);
            this.state = state;
            this.state.setContext(this);
        };
        // delegate to state
        Context.prototype.requestA = function () {
            this.state.handleA();
        };
        Context.prototype.requestB = function () {
            this.state.handleB();
        };
        return Context;
    }());
    var State = /** @class */ (function () {
        function State() {
        }
        State.prototype.setContext = function (context) {
            this.context = context;
        };
        return State;
    }());
    var FirstState = /** @class */ (function (_super) {
        __extends(FirstState, _super);
        function FirstState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FirstState.prototype.handleA = function () {
            console.log('first state handles requestA');
            console.log('first state wants to change state of context');
            this.context.transitionTo(new SecondState());
        };
        FirstState.prototype.handleB = function () {
            console.log('first state handles requestB');
        };
        return FirstState;
    }(State));
    var SecondState = /** @class */ (function (_super) {
        __extends(SecondState, _super);
        function SecondState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SecondState.prototype.handleA = function () {
            console.log('second state handles requestA');
        };
        SecondState.prototype.handleB = function () {
            console.log('second state handles requestA');
            console.log('second state wants to change state of context');
            this.context.transitionTo(new FirstState());
        };
        return SecondState;
    }(State));
    var context = new Context(new FirstState());
    context.requestA();
    context.requestB();
})(State || (State = {}));
