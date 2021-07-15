    const btn = document.getElementById("validar");
        btn.addEventListener("click", function () {
             const card = document.getElementById("numberCard").value; //Toma el numero de tarjeta que ingresan en el input
             const valid = validator.isValid(card);//variables que toman las propiedades de Validatos.js
             const hide = validator.maskify(card);
         if (card === "") {
            document.getElementById("retrn").style.display = "none";
            document.getElementById("p2").style.display = "block";
            document.getElementById("p2").innerHTML = "Ingrese el numero de tarjeta";
        } else if (valid === true) {
            document.getElementById("retrn").style.display = "block"; //muestra boton de regreso
            document.getElementById("validar").style.display = "none"; //Oculta boton de validar
            document.getElementById("box").style.display = "none"; //Oculta el div que contien la caja para ingresar el numero
            document.getElementById("p2").style.display = "block"; //muestra el parrafo 2, donde se vera el texto
            document.getElementById("p2").innerHTML = "Tarjeta valida"; //Mostrara el texto en el parrafo 2 de HTML
            document.getElementById("p1").style.display = "block"; //Muestra el parrafo 1
            document.getElementById("p1").innerHTML = hide; //Muestra el arreglo de numeros ###1354
        } else {
            document.getElementById("retrn").style.display = "block";
            document.getElementById("validar").style.display = "none";
            document.getElementById("box").style.display = "none";
            document.getElementById("p2").style.display = "block";
            document.getElementById("p2").innerHTML = "Tarjeta invalida";
            document.getElementById("p1").style.display = "block";
            document.getElementById("p1").innerHTML = hide;
    }   
    })
    const regresar = document.getElementById("retrn");
    regresar.addEventListener("click", function () {
        document.getElementById("validar").style.display = "block";
        document.getElementById("retrn").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("numberCard").value = "";
        document.getElementById("box").style.display = "block";
    })
    import validator from './validator.js'; 