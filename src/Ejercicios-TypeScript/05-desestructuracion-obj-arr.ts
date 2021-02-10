/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACIÓN DE OBJETOS
interface Player {
  vol: number;
  seg: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const player: Player = {
  vol: 80,
  seg: 41,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

//Si tuviéramos una variable que coincide con una propiedad del objeto, le podemos cambiar el nombre a la propiedad del objeto.
//const author = "Pepito";
//const {vol, seg, song, details: { author: authorDetail }} = player;

const {
  vol,
  seg,
  song,
  details: { author },
} = player;
// const { author } = details;

console.log("El volumen actual es de: ", vol);
console.log("El segundo actual es: ", seg);
console.log("La canción es: ", song);
console.log("El nombre del autor es: ", author);

//DESESTRUCTURACIÓN DE ARRAYS

const dragonBallZ: string[] = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = dragonBallZ;

console.log("Personaje 1:", p1);
console.log("Personaje 2:", p2);
console.log("Personaje 3:", p3);

//Si solamente quisiéramos el tercer valor del array, tendríamos que dejar su espacio vacío: const [ , , p3] = dragonBallZ;
