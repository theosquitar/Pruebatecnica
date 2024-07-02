for (let i = 1; i <= 5; i++) {
    let numeroGenerado = Math.floor(Math.random() * 100);
    let paridad = numeroGenerado % 2 === 0 ? 'par' : 'impar';
    console.log(`Iteración ${i}: numeroGenerado = ${numeroGenerado} // el número es ${paridad}`);
  }
  