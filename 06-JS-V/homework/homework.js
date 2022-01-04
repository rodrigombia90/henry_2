// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  //
  function Usuario (opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password =opciones.password;
  }

  Usuario.prototype.saludar = function () {
    return 'Hola, mi nombre es ' + this.nombre
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

  Constructor.prototype.saludar= function(){
    return "Hello World!"
  }

}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  //en este caso se llama asi, porque es lo que nos piden
  //en este caso hay que usar el this, porque sive para cualquier cosa qe nos pasen por parametro, entonces no hacemos alusion a nada enn particular con el this
  //el split lo que va a hacer es dividir el string en un array de strings de caracteres individuales
  String.prototype.reverse = function (){
    return this.split("").reverse().join("");
  }

  //va primero la funcion split, porque la dividis, despues la damos vuelta, y despues la pegamos, por eso el orden de esas 3 funciones

}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y 
  //sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido,edad,domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;

    }
    //cuando estamos dentro de la clase no hace falta usar el protoype
    detalle(){
      return {Nombre: this.nombre, Apellido: this.apellido, Edad: this.edad, Domicilio: this.domicilio}
    }
}

//el this hace referencia a una variable del tipo persona, el this, se reemplaza por el nombre de la variable

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var person = new Persona ("Juan", "Perez", 22, "Saavedra 123")
  return person;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function () {
    return this.nombre + ', ' + this.edad + ' años';
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
