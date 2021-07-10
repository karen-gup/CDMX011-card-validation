import validator from './validator.js';
const btn = document.getElementById("validar");
btn.addEventListener("click", function() {
    const card = document.getElementById("numberCard").value;
    const valid = validator.isValid(card)
    const hide = validator.maskify(card)
    document.getElementById("p2").innerHTML = hide;
   

    if (card===""){
        document.getElementById("retrn").style.display = "block";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1").innerHTML = "No ingresaste ningun numero, vuelva a intentar";
        document.getElementById("div1").style.display = "none";
        document.getElementById("p2").style.display = "block";
    } else if (valid === true) {
        document.getElementById("retrn").style.display = "block";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1").innerHTML = "Tu tarjeta es valida";
        document.getElementById("div1").style.display = "none";
        document.getElementById("p2").style.display = "block";
    }else {
        document.getElementById("retrn").style.display = "block";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p1").innerHTML = "Tu tarjeta es invalida";
        document.getElementById("div1").style.display = "none";
        document.getElementById("p2").style.display = "block";
    }
})

const regresar = document.getElementById("retrn");
regresar.addEventListener("click", function() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("retrn").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("numberCard").value = "";
})