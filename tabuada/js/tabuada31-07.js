function gerarTabuada(){
    let numero = Number(document.getElementById('num').value);
    let tela = document.getElementById('tela-resultado');

    if(document.getElementById('num').value === ''){
        tela.innerHTML = "ERRO INPUT VAZIO."
    }

    tela.innerHTML = `Tabuada do ${numero}: </br>`

    let multiplicador = 0

    while(multiplicador <= 10){
        
        let resultado = numero * multiplicador;

        tela.innerHTML += `<p>${numero} x ${multiplicador} = ${resultado} </p>`

        multiplicador++
    }
}