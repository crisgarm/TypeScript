/*
    ===== Código de TypeScript =====
*/

class Heroes {
  private alterEgo: string; //solo es visible dentro de esta clase
  public age: number; //es visible fuera de esta clase
  static realName: string; //se puede acceder al valor de esta propiedad sin crear una instancia de la clase
  showName() {
    return this.alterEgo + " " + this.age;
  }
}

interface superHeroes {
  alterEgo?: string;
  age?: number;
  realName?: string;
  //   showName: () => string;
}
//En una interface no se puede definir cómo se quiere que funcione algún método. En una clase sí. En la interface solo puedo indicar que es una función que va a retornar un tipo de dato.

const iroman = new Heroes();
const spiderman: superHeroes = {};
