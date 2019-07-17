"use strict";
var SportEngine = /** @class */ (function () {
    function SportEngine() {
        this.name = 'sport engine';
    }
    return SportEngine;
}());
// car builder and class
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = new Car();
    }
    CarBuilder.prototype.reset = function () {
        this.car = new Car();
    };
    CarBuilder.prototype.setSeats = function (num) {
        this.car.seats = num;
    };
    CarBuilder.prototype.setEngine = function (engine) {
        this.car.engine = engine.name;
    };
    CarBuilder.prototype.setTripComputer = function () {
        this.car.tripComputer = true;
    };
    CarBuilder.prototype.setGPS = function () {
        this.car.gps = true;
    };
    CarBuilder.prototype.getResult = function () {
        return this.car;
    };
    return CarBuilder;
}());
var Car = /** @class */ (function () {
    function Car() {
        // default
        this.seats = 4;
        this.engine = 'default engine';
        this.tripComputer = false;
        this.gps = false;
    }
    return Car;
}());
// manual builder and class
var CarManualBuilder = /** @class */ (function () {
    function CarManualBuilder() {
        this.manual = new Manual();
    }
    CarManualBuilder.prototype.reset = function () {
        this.manual = new Manual();
    };
    CarManualBuilder.prototype.setSeats = function (num) {
        this.manual.seats = "describe that car must have " + num + " seats";
    };
    CarManualBuilder.prototype.setEngine = function (engine) {
        this.manual.engine = "describe " + engine.name + " engine";
    };
    CarManualBuilder.prototype.setTripComputer = function () {
        this.manual.tripComputer = 'describe trip computer';
    };
    CarManualBuilder.prototype.setGPS = function () {
        this.manual.gps = 'describe gps';
    };
    CarManualBuilder.prototype.getResult = function () {
        return this.manual;
    };
    return CarManualBuilder;
}());
var Manual = /** @class */ (function () {
    function Manual() {
        // default manual
        this.seats = 'default number of seats';
        this.engine = 'default engine';
        this.tripComputer = 'default trip computer description';
        this.gps = 'default gps description';
    }
    return Manual;
}());
// director leads the builder
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.constructSportCar = function (builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(new SportEngine());
        builder.setTripComputer();
        builder.setGPS();
    };
    return Director;
}());
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.makeCar = function () {
        var car;
        var manual;
        var director = new Director();
        var carBuilder = new CarBuilder();
        var manualBuilder = new CarManualBuilder();
        director.constructSportCar(carBuilder);
        car = carBuilder.getResult();
        console.log(car);
        director.constructSportCar(manualBuilder);
        manual = manualBuilder.getResult();
        console.log(manual);
    };
    return Application;
}());
var app = new Application();
app.makeCar();
