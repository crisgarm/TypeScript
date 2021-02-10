/*
    ===== Código de TypeScript =====
*/

export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Samsung 8",
  price: 170,
};

const tablet: Product = {
  description: "iPad Air",
  price: 350,
};

export function getVAT(products: Product[]): [number, number] {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.15];
}

const items = [phone, tablet];

const [total, vat] = getVAT(items);

console.log("Total: ", total);
console.log("VAT: ", vat);
