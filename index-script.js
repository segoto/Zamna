

window.onload = function collapsable(){
    var w = window.innerWidth;
    console.log(document.getElementById("a-colapsar"))
    console.log(w);
    if(w<400){
        document.getElementById("a-colapsar").innerHTML = "";
    }
}