import { Product, getVAT } from "./06-desestructuracion-funciones";
/*
    ===== Código de TypeScript =====
*/

const shoppingCart: Product[] = [
  {
    description: "Phone 1",
    price: 100,
  },
  {
    description: "Phone 2",
    price: 150,
  },
];

const [total, vat] = getVAT(shoppingCart);
console.log("Total: ", total);
console.log("VAT: ", vat);
