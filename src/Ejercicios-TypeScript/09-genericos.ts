/*
    ===== Código de TypeScript =====
*/
// <T> se refiere a cualquier tipo
function whatTypeIam<T>(argument: T) {
  return argument;
}

let IamString = whatTypeIam("Hello World");
let IamNumber = whatTypeIam(100);
let IamArray = whatTypeIam([1, 2, 3, 4]);

let IamExplicit = whatTypeIam<number>(100);
