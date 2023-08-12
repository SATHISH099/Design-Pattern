interface Observer {
  update(message: string): void;
}

class ConcreteObserver implements Observer {
  update(message: string): void {
    console.log(`Message received: ${message}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}

export { ConcreteObserver, Subject };
