let cadena = "Que tal";
let caracter = "o";
let contador = 0;

for (let char of cadena) {
  if (char === caracter) {
    contador++;
  }
}

console.log(`El carácter "${caracter}" se repite ${contador} veces en "${cadena}".`);
