
const validator = {

  isValid: function(creditCard){
    const arreglo= Array.from(creditCard).reverse().map(Number);
    let luhn= 0
    for (let i=0; i<arreglo.length; i++){
      if(i%2===1){
        let duplicar= arreglo[i]*2;
        if(duplicar>=10){
          let producto= duplicar -9
          luhn += producto;
      }else{
        luhn += duplicar;
      }
      }else{
        luhn += arreglo[i];
      }
    }
    let numFinal= luhn%10;
    if(numFinal===0){
      return true;
    }else{
      return false;
    }
  },
  maskify: function(Ocultar){
    let longArray= Ocultar.lengt
    let miArray= Array.from(Ocultar)
    if (longArray<=4){
      return Ocultar
    }else{
      for(let i=0; i<Ocultar.length -4; i++){
        miArray[i]='#'
      }
      let masknumber= miArray.join("");
      return masknumber;
    }
   }
}


export default validator;