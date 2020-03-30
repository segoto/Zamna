

window.onload = function collapsable(){
    var w = window.innerWidth;
    console.log(document.getElementById("a-colapsar"))
    console.log(w);
    if(w<400){
        document.getElementById("a-colapsar").innerHTML = "";
    }
}


function enviarMensaje(){
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensaje").value = "";
    alert("Has enviado el mensaje correctamente");
}