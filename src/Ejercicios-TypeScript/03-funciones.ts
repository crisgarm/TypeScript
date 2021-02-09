/*
    ===== Código de TypeScript =====
*/

function sum(a: number, b: number) {
  return a + b;
}

const arrowSum = (a: number, b: number) => {
  return a + b;
};

function mult(number1: number, number2?: number, base: number = 2) {
  return number1 * base;
}

const result = sum(2, 3);
const resultMult = mult(10);
const resultMult2 = mult(5, 5, 10);
console.log(result);
console.log(resultMult);
console.log(resultMult2);

interface CharacterLOD {
  name: string;
  hp: number;
  showHp: () => void;
}

function heal(character: CharacterLOD, healX: number): void {
  character.hp += healX;
}

const newCharacter: CharacterLOD = {
  name: "Legolas",
  hp: 40,
  showHp() {
    console.log("Health Points:", this.hp);
  },
};

heal(newCharacter, 20);
newCharacter.showHp();
