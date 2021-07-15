
const validator = {
  isValid: function (creditCard) {
    const arreglo = Array.from(creditCard).reverse().map(Number); //Pasa el string como array, lo invierte y lo declara como number //
    let sum = 0; //Variable reasignable para las operaciones
    for (let i = 0; i < arreglo.length; i++) {
      if (i%2!== 0) { //Si la posicion es impar...
        let double = arreglo[i] * 2; //Toma el valor y lo duplica
        if (double >= 10) { // Si el producto tiene dos digitos
          let producto = double - 9 //Se le resta 9
           sum += producto; //y se suman los digitos 
        } else {
          sum += double; //Si no tienen dos digitos, solo se duplican y se suman
        }
      } else {
         sum += arreglo[i];//Si la posicion no es impar, se toman los valores del arreglo y se suman a la var
        }
     }
    let numFinal = sum % 10; //El residuo de la suma total entre 10
    if (numFinal === 0) { //Si el residuo es 0 el algoritmo es valido
        return true;
    } else {
        return false;
      }
    },
  maskify: function (mask) {
    let miArray = Array.from(mask) //definir arreglo
    let longArray = mask.lengt; //longitud del arreglo
    if (longArray <= 4) { //Si la longitud del arreglo es igual o menor a 4
      return miArray //devuelve el arreglo 
    } else {  
      for (let i = 0; i < miArray.length - 4; i++) {
        miArray[i] = '#' //Si no, devolvera el array enmascarado con #, excepto los ultimos cuatro digitos
        }
      let masknumber = miArray.join(""); //Con .joing hago que mi arreglo no este dividido o separado al mostrarlo
        return masknumber;
      }
  }
  }
  export default validator;