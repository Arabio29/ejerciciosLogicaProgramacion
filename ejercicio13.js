function mostrarSecuenciaAsteriscos(n) {
    for (let i = n; i > 0; i--) {
      let fila = '';
      for (let j = 0; j < i; j++) {
        fila += '* ';
      }
      console.log(fila);
    }
  }
  
  // Ejemplo: mostrar la secuencia de asteriscos
  const n = 20;
  mostrarSecuenciaAsteriscos(n);

//Hecho por Eliasib Cantor, Sofia y Daniel Naranjo

  //Hicimos esta ejercicio en javascript porque el tuvimos problemas con los perfiles de PseInt

    /*
    EJERCICIO

    Escriba un algoritmo que lea un entero n y muestre n asteriscos en la primera fila, n-1
    asteriscos en la segunda fila y así sucesivamente.
    */
 
  /*
  ¡¡Para ejecutar el programa!!
  Requerimientos(Tener instalado: Un editor de codigo y node.js)
  Digite en la terminal de su editor de codigo el siguiente comando: node ejercicio12.js
  */