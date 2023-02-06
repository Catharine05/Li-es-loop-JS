let entrar = prompt("Vc quer cadastrar uma nova peça?  \n1-Sim \n 2-Não");
let pReprovadas = "";
let pTotalReprovadas = 0;
let pTotalAprovadas = 0;
let pTotalPecas = 0;

while (entrar == "1") {
    let numeroPeca = prompt("Digite o número da peça."); 
    let situacaoPeca = prompt("Digite a situação da Peça. \n 1-Aprovado \n 2-Reprovado");


    if (situacaoPeca == "2") {
        pReprovadas += numeroPeca + "</br>";
        pTotalReprovadas++;
    }

    if (situacaoPeca == "1") {
        pTotalAprovadas++;
    }
    pTotalPecas = (pTotalAprovadas + pTotalReprovadas);

      entrar = prompt("Vc quer cadastrar uma nova peça? \n 1-Sim \n 2-Não");


}

document.getElementById("pecasReprovadas").innerHTML = pReprovadas;
document.getElementById("totalReprovadas").innerHTML = pTotalReprovadas;
document.getElementById("totalAprovadas").innerHTML = pTotalAprovadas;
document.getElementById("totalPecas").innerHTML = pTotalPecas;

