request = new XMLHttpRequest(); // criando 

request.addEventListener('load', function(){
    console.log(this.responseText)
});

request.open('GET','COLOCAR A URL AQUI DENTRO', true) // POR A ULR DENTRO DA STRING APÓS O GET(colocar true é opcional)
request.send(null) // 