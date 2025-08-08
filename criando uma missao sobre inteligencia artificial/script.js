const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que o Palmeiras conquista mais um título importante, você se depara com a reação da torcida no estádio. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível, o Palmeiras está cada vez mais forte!",
                afirmacao: "Ficou emocionado com a vitória e o crescimento do time."
            },
            {
                texto: "Será que vamos conseguir conquistar o próximo título internacional também?",
                afirmacao: "Acreditou que o time ainda tem muito potencial para conquistar títulos fora do Brasil."
            }
        ]
    },
    {
        enunciado: "Após o Palmeiras conquistar a Copa Libertadores pela segunda vez consecutiva, você é convidado a escrever uma análise sobre o impacto dessa conquista no futebol brasileiro. O que você faz?",
        alternativas: [
            {
                texto: "Pesquisaria sobre o histórico de títulos do Palmeiras e como essa vitória fortalece a tradição do clube.",
                afirmacao: "Decidiu focar na importância histórica da conquista para o Palmeiras e para o futebol brasileiro."
            },
            {
                texto: "Escreveria sobre a atuação do time durante a competição e como isso reflete no futuro do clube.",
                afirmacao: "Quis destacar o desempenho do time e como a vitória impacta sua trajetória futura."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre os maiores títulos do Palmeiras, você é questionado sobre qual foi o mais marcante. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a Copa Libertadores de 1999 foi o título mais importante da história do clube.",
                afirmacao: "Enfatizou a importância do título de 1999, que consolidou o Palmeiras como um dos maiores clubes da América do Sul."
            },
            {
                texto: "A Copa Rio de 1951 é a grande conquista do Palmeiras, pois foi o primeiro título internacional do clube.",
                afirmacao: "Valoriza a Copa Rio de 1951 como o marco internacional do Palmeiras, sendo um título pioneiro."
            }
        ]
    },
    {
        enunciado: "Após o Palmeiras vencer o Campeonato Paulista novamente, você precisa criar uma imagem que represente a força do time. Como você faz isso?",
        alternativas: [
            {
                texto: "Crio uma imagem utilizando a taça do Campeonato Paulista e elementos que destacam a tradição do clube.",
                afirmacao: "Decidiu destacar a importância do Campeonato Paulista como um símbolo da força contínua do Palmeiras no estado."
            },
            {
                texto: "Crio uma imagem com o time levantando a taça, focando no espírito vencedor do Palmeiras em competições nacionais.",
                afirmacao: "Quis representar a atitude vencedora do Palmeiras, com o time sempre em busca de títulos nacionais."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho sobre os maiores clubes de futebol do Brasil e precisa comparar o Palmeiras com outros times que também possuem muitos títulos. O que você faz?",
        alternativas: [
            {
                texto: "Focaria em destacar todos os títulos nacionais e internacionais do Palmeiras, evidenciando sua relevância histórica.",
                afirmacao: "Destacou as conquistas do Palmeiras, especialmente suas vitórias na Libertadores e outros campeonatos de grande importância."
            },
            {
                texto: "Pesquisaria sobre como o Palmeiras se manteve competitivo ao longo dos anos, apesar das dificuldades.",
                afirmacao: "Acreditou que o maior destaque do Palmeiras está na sua resiliência e na sua capacidade de conquistar títulos em diferentes eras."
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();