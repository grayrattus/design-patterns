abstract class Car {
    abstract getPrice():number;
    abstract getDescription():string;
}

class Maluch extends Car {
    getPrice(): number {
        return 50;
    }
    getDescription(): string {
        return 'Maluch';
    }
}

abstract class CarDecorator extends Car{
    abstract decoratedCar: Car;
    abstract getPrice(): number;
    abstract getDescription(): string;
}

class Autopilot extends CarDecorator {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    getPrice(): number {
        return this.decoratedCar.getPrice() + 50;
    }
    getDescription(): string {
        return this.decoratedCar.getDescription() + ' z autopilotem';
    }

}