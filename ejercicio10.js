  //Hecho por Eliasib Cantor, Sofia y Daniel Naranjo

  //Hicimos esta ejercicio en javascript porque el tuvimos problemas con los perfiles de PseInt

  /*
  ¡¡Para ejecutar el programa!!
  Requerimientos(Tener instalado: Un editor de codigo y node.js)
  Digite en la terminal de su editor de codigo el siguiente comando: node ejercicio10.js
  */

function encontrarNumeroValido() {
    let num = 0;
  
    while (!(num % 2 === 0 && num % 5 !== 0 && num > 100 && num < 10000)) {
      num = Math.floor(Math.random() * 9899) + 101;
    }
  
    return num;
  }
  
  const numeroCumpliendoCondiciones = encontrarNumeroValido();
  console.log("El número generado que cumple con las condiciones es:", numeroCumpliendoCondiciones);


  