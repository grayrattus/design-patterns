var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var Maluch = /** @class */ (function (_super) {
    __extends(Maluch, _super);
    function Maluch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maluch.prototype.getPrice = function () {
        return 50;
    };
    Maluch.prototype.getDescription = function () {
        return 'Maluch';
    };
    return Maluch;
}(Car));
var CarDecorator = /** @class */ (function (_super) {
    __extends(CarDecorator, _super);
    function CarDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarDecorator;
}(Car));
var Autopilot = /** @class */ (function (_super) {
    __extends(Autopilot, _super);
    function Autopilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    Autopilot.prototype.getPrice = function () {
        return this.decoratedCar.getPrice() + 50;
    };
    Autopilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ' z autopilotem';
    };
    return Autopilot;
}(CarDecorator));
