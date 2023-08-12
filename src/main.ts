console.log("Hello World");
import Singleton from "./patterns/singleton";
import { ConcreteObserver, Subject } from "./patterns/observer";
import Factory from "./patterns/factory";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Are singleton instances equal? ", singleton1 === singleton2);

const factory = new Factory();
const product1 = factory.createProduct("1");
const product2 = factory.createProduct("2");

console.log(product1.operation());
console.log(product2.operation());

const observerA = new ConcreteObserver();
const observerB = new ConcreteObserver();

const subject = new Subject();
subject.addObserver(new ConcreteObserver());
subject.notifyObservers("Hello World");

subject.addObserver(observerA);
subject.addObserver(observerB);
subject.notifyObservers("Hello, observers!");
