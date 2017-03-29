var pokemones=[];

function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  }
}
var pikachu = new Pokemon("Pikachu","amarillo",80);
var charmander  = new Pokemon("Charmander","rojo",30);

console.log(pikachu)
console.log(charmander)

pikachu.pelear(charmander)

console.log(charmander.vida)

function crearPokemon() {
 var nombre = document.getElementById("nombrePokemon");
 var color = document.getElementById("colorPokemon");
 var puntosAtaque = document.getElementById("puntosAtaque");

 var pokemon = new Pokemon(nombre.value, color.value, parseInt(puntosAtaque.value));
 pokemones.push(pokemon);
 mostrarPokemones();
}

function mostrarPokemones(){
 var listaPokemones = document.getElementById("listaPokemones");
 var lista = document.createElement("ul");
 var elemento = document.createElement("li");
   pokemones.forEach(function(pokemon){
     elemento.innerText=pokemon.nombre + " " + pokemon.color + " " + pokemon.puntosAtaque;
     lista.appendChild(elemento);
 });
 listaPokemones.appendChild(lista);
}