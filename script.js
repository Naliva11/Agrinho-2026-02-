function calcular(){

    let arvores =
    Number(document.getElementById("arvores").value);

    let pontos = arvores * 2;

    let mensagem =
    "🌳 Pontuação Verde: " + pontos;

    document.getElementById("resultado")
    .innerHTML = mensagem;

}