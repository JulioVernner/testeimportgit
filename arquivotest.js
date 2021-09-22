/*function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("CLICK ME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        window.history.go(0);
     }
     document.body.appendChild(btn);    
}*/


function criarBotao() {
    var btn = document.createElement('button');
    var nomebtn = document.createTextNode('Me clica')

    btn.appendChild(nomebtn);
    document.body.appendChild(btn);

    btn.onclick = function() {
        alert('Clicado')
        console.log('Apertou')
    }
}

criarBotao();