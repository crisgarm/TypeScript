/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public property: string = "ABCD";

  show() {
    console.log("Hello Word");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass.property);
