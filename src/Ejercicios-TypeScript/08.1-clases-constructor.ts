/*
    ===== Código de TypeScript =====
*/

class Hero {
  //   alterEgo: string;
  //   age: number;
  //   realName: string;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    // this.alterEgo = alterEgo;
    console.log("hey!"); //primero se ejecuta el constructor. Este es un punto interesante para poder inicializar las propiedades de mi clase.
  }
}

const superman = new Hero("superman", 27, "Clark"); //esto es una instancia de mi clase. Estos paréntesis hacen referencia al constructor de mi clase.
console.log(superman);
