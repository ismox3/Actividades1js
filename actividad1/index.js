const pesos = [10,20,30,40,50,60,70,80,100];

let p40 = 0;
let p40a50 = 0;
let p50a60 = 0;
let p60mas = 0;


for (let i = 0; i < pesos.length; i++) {
    if (pesos[i] < 40) {
      p40++;
    } else if (pesos[i] >= 40 && pesos[i] < 50) {
      p40a50++;
    } else if (pesos[i] >= 50 && pesos[i] < 60) {
      p50a60++;
    } else {
      p60mas++;
    }
  }

console.log(`Alumnos de menos de 40 kg: ${p40}`);
console.log(`Alumnos entre 40 y 50 kg: ${p40a50}`);
console.log(`Alumnos entre 50 y 60 kg: ${p50a60}`);
console.log(`Alumnos de mas de 60 kg: ${p60mas}`);

