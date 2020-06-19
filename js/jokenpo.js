var jogadorEscolha = 0
var jogadorPontos = 0
var cpuPontos = 0
var cpuEscolha = 0
var ganhador = -1
var nomeJogador


function iniciar() {
    do
        nomeJogador = window.prompt("Digite seu nome:", "")
    while (nomeJogador == null || nomeJogador == "")
    document.getElementById('jogador-nome').innerHTML = nomeJogador
}

function jogar(escolha) {
    jogadorEscolha = escolha
    cpuEscolha = Math.round(Math.random() * 2 + 1)

    if (jogadorEscolha == 1 && cpuEscolha == 1)
        ganhador = 0
    else if (jogadorEscolha == 1 && cpuEscolha == 2)
        ganhador = 2
    else if (jogadorEscolha == 1 && cpuEscolha == 3)
        ganhador = 1
    else if (jogadorEscolha == 2 && cpuEscolha == 1)
        ganhador = 1
    else if (jogadorEscolha == 2 && cpuEscolha == 2)
        ganhador = 0
    else if (jogadorEscolha == 2 && cpuEscolha == 3)
        ganhador = 2
    else if (jogadorEscolha == 3 && cpuEscolha == 1)
        ganhador = 2
    else if (jogadorEscolha == 3 && cpuEscolha == 2)
        ganhador = 1
    else if (jogadorEscolha == 3 && cpuEscolha == 3)
        ganhador = 0

    document.getElementById('jogador-escolha-1').classList.remove('selecionado')
    document.getElementById('jogador-escolha-2').classList.remove('selecionado')
    document.getElementById('jogador-escolha-3').classList.remove('selecionado')
    document.getElementById('cpu-escolha-1').classList.remove('selecionado')
    document.getElementById('cpu-escolha-2').classList.remove('selecionado')
    document.getElementById('cpu-escolha-3').classList.remove('selecionado')
    document.getElementById('jogador-escolha-' + jogadorEscolha).classList.add('selecionado')
    document.getElementById('cpu-escolha-' + cpuEscolha).classList.add('selecionado')

    if (ganhador == 0)
        document.getElementById('visor').value = "Empate"
    else if (ganhador == 1){
        document.getElementById('visor').value = nomeJogador + " venceu!"
        jogadorPontos++
    } else if (ganhador == 2) {
        document.getElementById('visor').value = "Computador venceu!"
        cpuPontos++
    }

    document.getElementById('jogadorPontos').value = "Pontos: " + jogadorPontos
    document.getElementById('cpuPontos').value = "Pontos: " + cpuPontos
}