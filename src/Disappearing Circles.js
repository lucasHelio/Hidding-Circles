

function create(color) {
    var div = document.createElement('div');
    
    div.id = 'circle';
    
    div.className = 'circle';
    div.style.background = color;
    
    div.onclick = function () {
        div.style.display = "none";
        
    };

    document.body.appendChild(div);
}




//incrementa o numero de circulos a serem criados
var numCircles = 0;
document.addEventListener('DOMContentLoaded', function(){
    var btn = document.createElement('BUTTON');
    var lbl = document.createTextNode("+1 Circulo");        
    btn.appendChild(lbl);
    btn.className = 'Button';   
    btn.onclick = function()
    {
       numCircles= numCircles+1;
       if(numCircles%2 ==0 && numCircles%3 !=0)
        create("red");
        else if (numCircles%3 ==0)
        create("yellow");
        else create("blue");
    }
    document.body.appendChild(btn);    
}, false);





// make all circles visible again.
window.onkeydown = function (event) {
    if (event.ctrlKey && event.key === "Escape") {
        document.getElementById("red-circle").style.display =
            "block";
        document.getElementById("yellow-circle").style.display =
            "block";
        document.getElementById("blue-circle").style.display =
            "block";
    }
}; 