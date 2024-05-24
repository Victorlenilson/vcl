const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = documwnt.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Insira o enunciado da Pergunta 1",
        alternativa: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Insira o enunciado da Pergunta 2",
        alternativa: ["Alternativa 1","Alternativa 2" ]
    },
    {
        enunciado: "Insira o enunciado da pergunta 3",
        alternativa: ["Alternativa1","Alternativa 2"]
    }
];

let atual = 0;