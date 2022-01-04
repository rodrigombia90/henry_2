// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre:nombre,
    edad:edad,
    meow:function(){
      return "Meow!";
    }
  }
  return objeto;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:


  //averiguar porque no pasa con objeto.property 
  //se usa bracket porque necesesitamos ingresar a la propiedad del objeto, y la unica forma de ingresar a la propiedad
  //si ponemos con . si o si tiene que venir como parametro la palabra property, porque es lo que escribimos despues del . pero en este caso, podemos recibir cualquier cosa, entonces se tiene que usar los corchetes
  //entonces al usar bracket, toma el parametro directamente que viene en la funcion
  objeto[property]=null;
  return objeto;  
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo] ();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var resultado=objetoMisterioso.numeroMisterioso * 5;
  return resultado;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  //delete es la funcion para eliminar propiedades de los objetos
  //usamos bracket notation porque estamos tomando el contenido de lo que viene en el parametro unaPropiedad adentro, lo que sea que venga
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto={
    nombre:nombre,
    email:email,
    password:password,
  }
  return objeto;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario.email!=null)
  {
    return true;
  }
  else{
    return false;
  }
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]!=null)
  {
    return true;
  }
  else{
    return false;
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  //el primer password hacer referencia al que esta adentro del apropiedad. el otro password es el que llega como valor a la funicon, desde afuera de la propiedad
  if(usuario.password===password){
    return true;
  }
  else{
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password=nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  //usuario es un objeto que tiene una propiedad que se llama amigos, y usamos push que es una propiedad de los arrays para pushearle el nuevoAmigo
usuario.amigos.push(nuevoAmigo);
return usuario
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  
  //funcion .map intera cada uno de los elementos del array
  //por cada elemento usuario del array usuarios se setea la propiedad es premium como true usando la funcion .map
  //forma con map
  usuarios.map(function(element){
    element.esPremium=true;
  });
  //forma con for
 // for (var i=0;i<usuarios.lenght;i++){
  //  usuarios[i].esPremium=true;
 // }
  return usuarios;



  }

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  /*
  el objeto usuario, tiene adentro una propieda que adento es un post, y adentro ese post tiene otra propiedad que es like y es un numerico (entero)
  usuario {
    post:[
      post{
        likes :num,
      }
    ]
  }
  */

  var acc=0;
  //por cada elemento dentro de usuario.post, ejecuta tal cosa (eso es lo que digo cuando uso la palabra elemento com generica dentro de la funcion)
  usuario.posts.map(function(element){
    acc+=element.likes;
  });

  //for(var i =0;i<usuario.post.lenght;i++){
  //  acc+=usuario.post[i].likes;
  //}
  return acc;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  /*
  el objeto producto tiene una propiedad precio y una propiedadDeDescuento y un metodo que es el que tenemos que armar
  producto{
    precio:100,
    porcentajeDeDescuento:0,2,
    calcularPrecioDescuento:function(){

    }
  }
  */

  producto.calcularPrecioDescuento=function (){
    var precioConDescuento=producto.precio - (producto.precio * producto.porcentajeDeDescuento);
    return precioConDescuento;
  };
  //this apunta al objeto del que estamos hablando (en este caso, this seria "usuario") dependiendo de donde se invoque, va a variar el valor de this
  //toma la propiedad precio del this (el objeto del que estamos hablando)
  //producto.calcularPrecioDescuento=function (){
  //  return this.precio - this.precio*producto.porcentaDeDescuento;
  //};
  return producto;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
