var x =1;
var ww = document.getElementById('ww');

setInterval(function(){
    x += 1;
    

    if(x>5){
        x=1;
    }
    var botao = document.getElementById('ra'+x).checked=true;
ww.innerHTML=x;

},3000)