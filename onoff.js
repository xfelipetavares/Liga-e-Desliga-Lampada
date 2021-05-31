function lig() {
    document.getElementById('lamp').src = 'Imagens/on.jpg';
}

function desl() {
    document.getElementById('lamp').src = 'Imagens/off.jpg';
}

function pisc() {
    var contador = 0
    var intervalo = 0
    while (contador < 20) {
        intervalo += 60
        setTimeout("document.getElementById('lamp').src = 'Imagens/on.jpg';", intervalo)
        intervalo += 60
        setTimeout("document.getElementById('lamp').src = 'Imagens/off.jpg';", intervalo)
        contador++
    }
}

