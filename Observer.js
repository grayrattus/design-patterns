;
var Dom = /** @class */ (function () {
    function Dom() {
        this.observers = [];
        this.statusSwiatel = false;
    }
    Dom.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    ;
    Dom.prototype.deleteObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index);
    };
    ;
    Dom.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update();
        }
    };
    Dom.prototype.wyjscieZDomu = function () {
        this.notifyObservers();
    };
    Dom.prototype.getStatusSwiatel = function () {
        return this.statusSwiatel;
    };
    return Dom;
}());
var Swiatla = /** @class */ (function () {
    function Swiatla(subject) {
        this.subject = subject;
        this.subject.registerObserver(this);
    }
    Swiatla.prototype.update = function () {
        console.log('Sprawdzam swiatla');
        if (this.subject.getStatusSwiatel()) {
            console.log('Swiatla sa zapalone.');
        }
        else {
            console.log('Swiatla sa zgaszone');
        }
    };
    return Swiatla;
}());
var dom = new Dom();
var swiatla = new Swiatla(dom);
dom.wyjscieZDomu();
