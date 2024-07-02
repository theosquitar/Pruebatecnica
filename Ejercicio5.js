class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    getDetalles() {
      console.log(`Nombre: ${this.nombre} ${this.apellido}, Edad: ${this.edad}`);
    }
  }
  
  class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
      super(nombre, apellido, edad);
      this.posicion = posicion;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log(`Posición: ${this.posicion}`);
    }
  }
  
  class Entrenador extends Persona {
    constructor(nombre, apellido, edad, añosExperiencia, idFederacion) {
      super(nombre, apellido, edad);
      this.añosExperiencia = añosExperiencia;
      this.idFederacion = idFederacion || Math.floor(10000 + Math.random() * 90000); }
    getDetalles() {
      super.getDetalles();
      console.log(`Años de Experiencia: ${this.añosExperiencia}, ID Federación: ${this.idFederacion}`); }
  }
  
  class Equipo {
    constructor(entrenador, jugadores) {
    this.entrenador = entrenador;

    this.jugadores = jugadores;
    }
  
    getDetalles() {
      console.log("Detalles del Entrenador:");
      this.entrenador.getDetalles();
      
      console.log("\nDetalles de los Jugadores:");
      this.jugadores.forEach(jugador => {
      jugador.getDetalles();
      console.log("---");
      });
    } }
  
 // Creación de objetos Persona, Jugador y Entrenador
  let jugadores = [
    new Jugador("Juan", "Pérez", 25, "Portero"),
    new Jugador("Ana", "García", 22, "Defensa"),
    new Jugador("Luis", "Martínez", 28, "Medio"),
    new Jugador("María", "López", 24, "Delantero")
  ];
  
 
  let entrenador = new Entrenador("Carlos", "Ruiz", 40, 15);

  let equipo = new Equipo(entrenador, jugadores);
  
  console.log("Detalles del Equipo:");

  equipo.getDetalles();
  