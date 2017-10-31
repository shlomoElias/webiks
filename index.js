document.getElementById("form-check").addEventListener("click", );


function onLihgt(){
    var randcolor = randColor();
    var color = color(randcolor);
}

function offLihgt(){
    var color = "white";
}

function randColor(){
    return (Math.floor((Math.random() * 9) + 1));
}

function color(a){
    if(a == 1){
        return("red")
    }
    if(a == 2){
        return("yellow")
    }
    if(a == 3){
        return("green")
    }
    if(a == 4){
        return("blue")
    }
    if(a == 5){
        return("black")
    }
    if(a == 6){
        return("orang")
    }
    if(a == 7){
        return("brown")
    }
    if(a == 8){
        return("red")
    }
    if(a == 9){
        return("red")
    }
}
