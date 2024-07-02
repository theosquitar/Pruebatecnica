function convertirHastaPunto(cadena) {
    let indexPuntos = cadena.indexOf('.');
    if (indexPuntos === -1) {
      return cadena.toUpperCase();
    } else {
      let antesDelPunto = cadena.slice(0, indexPuntos).toUpperCase();
      let despuesDelPunto = cadena.slice(indexPuntos);
      return antesDelPunto + despuesDelPunto;
    }
  }
  
  let entrada = "www.techacademy.com";
  let salida = convertirHastaPunto(entrada);
  
  console.log("Entrada:", entrada);
  console.log("Salida:", salida);
  