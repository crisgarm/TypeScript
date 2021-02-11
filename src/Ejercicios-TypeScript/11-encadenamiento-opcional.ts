/*
    ===== Código de TypeScript =====
*/

interface Passenger {
  name: string;
  sons?: string[]; //? propiedad opcional
}

const passenger1: Passenger = {
  name: "Fernando",
};

const passenger2: Passenger = {
  name: "Rita",
  sons: ["Matilde", "Miguel"],
};

function showSons(passenger: Passenger): void {
  const howManySons = passenger.sons?.length || 0;
  console.log(howManySons);
}

showSons(passenger1);
