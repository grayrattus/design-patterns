interface Subject {
    registerObserver(o: Observer);
    deleteObserver(o: Observer);
    notifyObservers();
}
interface Observer {
    update();
};

class Dom implements Subject{
    private observers: Array<Observer> = [];
    statusSwiatel: boolean;

    constructor() {
        this.statusSwiatel = false;
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    };
    deleteObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index);
    };
    notifyObservers() {
        for(let o of this.observers) {
            o.update();
        }
    }

    wyjscieZDomu() {
        this.notifyObservers();
    }

    getStatusSwiatel():boolean {
        return this.statusSwiatel;
    }
}


class Swiatla implements Observer {
    private subject: Dom;

    constructor(subject: Dom) {
        this.subject = subject;
        this.subject.registerObserver(this);
    }
  update() {
    console.log('Sprawdzam swiatla');
    if (this.subject.getStatusSwiatel()) { 
        console.log('Swiatla sa zapalone.');
    } else {
        console.log('Swiatla sa zgaszone');
    }
  }
}

let dom = new Dom();
let swiatla = new Swiatla(dom);

dom.wyjscieZDomu();