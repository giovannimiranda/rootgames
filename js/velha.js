//Obtendo os elementos do DOM com que vamos interagir

const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo
const b_reiniciar = document.getElementById('reiniciar'); //pega o botão de reiniciar

//Definindo variáveis de estado do jogo

var j1pontos = 0
var j2pontos = 0
var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 
var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 
var nomeJogador1, nomeJogador2

function iniciar(){
    do {
        nomeJogador1 = window.prompt("Digite o nome do 1º Jogador:", "")
        nomeJogador2 = window.prompt("Digite o nome do 2º Jogador:", "")
    } while (nomeJogador1 == null || nomeJogador1 == "" || nomeJogador2 == null || nomeJogador2 == "")
    document.getElementById('jogador-nome1').innerHTML = nomeJogador1
    document.getElementById('jogador-nome2').innerHTML = nomeJogador2
}

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for (var i = 0; i < 9; i++) {
	casas[i].addEventListener('click', (event) => {
        //se a casa estiver vazia e ninguém tiver vencido a partida
		if ((event.target.value == '_') && (vencedor == '_')) {
			event.target.value = jogador; //preenche a casa com X ou O
			event.target.style.color = '#fff'; //torna o valor da casa visível

            document.getElementById('vencedor').value = ''
            document.getElementById('j1Pontos').value = 'Pontos: ' + j1pontos
            document.getElementById('j2Pontos').value = 'Pontos: ' + j2pontos
            vencedor = vitoria(); //Executa a função vitoria()
        }
            if (jogador == 'X' && vencedor != '_') {
                document.getElementById('vencedor').value = nomeJogador1 + ' venceu!'
                j1pontos++
                document.getElementById('j1Pontos').value = 'Pontos: ' + j1pontos
            }else if (jogador == 'O' && vencedor != '_') {
                document.getElementById('vencedor').value = nomeJogador2 + ' venceu!'
                j2pontos++
                document.getElementById('j2Pontos').value = 'Pontos: ' + j2pontos
            }
        trocarJogador();
    });

    jogador = 'X'
}

//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', (event) => {
	for (var i = 0; i < 9; i++) {
		casas[i].value = '_'; //Limpa todas as casas
		casas[i].style.color = '#f7fe2e00'; //Torna o valor _ invisível
		casas[i].style.backgroundColor = '#694e4e91'; //Torna o fundo branco
	}

    vencedor = '_'; //Reseta o vencedor
    document.getElementById('vencedor').value = ''

    jogador = 'X'
});

//Alterna a vez entre os jogadores X e Y
var trocarJogador = function() {
	if (jogador == 'X') {
		jogador = 'O';

	} else {
		jogador = 'X';
	}
}

//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
var vitoria = function() {
	if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[1].style.backgroundColor='#0F0';
		casas[2].style.backgroundColor='#0F0';
        return casas[0].value;

	}else if((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[5].style.backgroundColor='#0F0';
		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.backgroundColor='#0F0';
		casas[7].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';
        return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[3].style.backgroundColor='#0F0';
		casas[6].style.backgroundColor='#0F0';
        return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[7].style.backgroundColor='#0F0';
        return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#0F0';
		casas[5].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';
        return casas[2].value;
        
	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';
        return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[6].style.backgroundColor='#0F0';
        return casas[2].value;
	}

    return '_';
}