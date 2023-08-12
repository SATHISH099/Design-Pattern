interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return "ConcreteProduct1";
  }
}

class ConcreteProduct2 implements Product {
  operation(): string {
    return "ConcreteProduct2";
  }
}

class Factory {
  createProduct(type: string): Product {
    switch (type) {
      case "1":
        return new ConcreteProduct1();
      case "2":
        return new ConcreteProduct2();
      default:
        throw new Error("Invalid type");
    }
  }
}

export default Factory;
