/*A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
Determinar cual de los dos elementos de texto es mayor
*/

let myarray = [true, 5, false, "hola", "adios", "by", 2]

function filtrar_texto_mayor (arr) {
  
  var solo_texto = arr.filter(el => typeof(el) == "string");

  // let ordenar_texto_por_longitud = solo_texto.sort((el1, el2) => {
  //   el1.length - el2.length})

  var palabra_mas_extensa;
  for (i = 0; i < solo_texto.lenght; i++) {

    // if (solo_texto[i].lenght > palabra_mas_extensa.lenght){
    //   palabra_mas_extensa = solo_texto[i];
    // }
    console.log(solo_texto[i])

    console.log(solo_texto);
  }

  console.log(palabra_mas_extensa);
  console.log(solo_texto);
}

filtrar_texto_mayor(myarray)
