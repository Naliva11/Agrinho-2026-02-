function calcular(){
    let arvores = Number(document.getElementById("arvores").value);

    let impacto = arvores * 2;

    let mensagem = "";

    if(impacto < 20){
        mensagem = "Impacto baixo 🌱";
    } else if(impacto < 60){
        mensagem = "Bom impacto 👍";
    } else {
        mensagem = "Excelente impacto 🌳";
    }

    document.getElementById("resultado").innerHTML =
    "Pontuação: " + impacto + " - " + mensagem;
}

function quiz(resposta){
    if(resposta){
        document.getElementById("quizResultado").innerHTML =
        "✅ Correto!";
    } else {
        document.getElementById("quizResultado").innerHTML =
        "❌ Tente novamente!";
    }
}