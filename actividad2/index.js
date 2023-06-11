let saldoinicial = 250; 
let ingresoMensual = 250; 
let interesMensual = 0.0125; 

let saldoTotal = 0;


for (let i = 1; i <= 12; i++) {
    saldoTotal += ingresoMensual;
    saldoTotal += saldoTotal * interesMensual;
  }
  console.log(`El saldo total al final de el año es $${saldoTotal.toFixed(2)}.`);