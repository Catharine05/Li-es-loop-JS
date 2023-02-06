let decisao = prompt("Vc deseja cadastrar as notas dos alunos? \n 1-Sim \n 2-Não");
let matricula = 0;
let nota01 = 0;
let nota02 = 0;
let nota03 = 0;
let frequencia = 0;
let media = 0;
let aluno = "";
let tMedia = 0;
let tAlunos = 0;
let sitMedia = 0;
let mediaMaior = 0;
let mediaMenor = 10;
let tMediaTurma = 0;
let TotalAprovados = 0;
let TotalReprovados = 0;
let totalReprovadosTurma = 0;
let tAlunoRepFalta = 0;
let tAlunoRepNota = 0;
let sitFreq = 0;
let tAlunoAprovado = 0;
let tAlunosReprovados = 0;
let TotalReprovadosFalta = 0;
let TotalReprovadosNota = 0;
let situacaoAluno = "";

while (decisao == "1") {
    matricula = prompt("Digite a matricula do aluno");
    nota01 = Number(prompt("Digite a nota do aluno"));
    nota02 = Number(prompt("Digite a nota do aluno"));
    nota03 = Number(prompt("Digite a nota do aluno"));
    frequencia = Number(prompt("Digite a frequencia do aluno.(32 maximo"));
    media = (nota01 + nota02 + nota03) / 3;

    if (frequencia >= 25) {
        sitFreq = 1;
    } else {
        sitFreq = 2;
        tAlunoRepFalta++;
    }

    if (media >= 7) {
        sitMedia = 1;
    } else {
        sitMedia = 2;
        tAlunoRepNota++;
    }
    if (sitFreq == 1 && sitMedia == 1) {
        situacaoAluno = "Aprovado";
        tAlunoAprovado++;
    } else {
        situacaoAluno = "Reprovado";
        tAlunosReprovados++;
    }

    tAlunos++;
    tMediaTurma += media;
    tMediaTurma = tMediaTurma / tAlunos;

    if (media > mediaMaior) {
        mediaMaior = media;
    }

    if (media < mediaMenor) {
        mediaMenor = media;
    }

    aluno += "</br> Matricula: " + matricula + " Média: " + media + " Situação: " + situacaoAluno;

    decisao = prompt("Vc deseja cadastrar as notas dos alunos? \n 1-Sim \n 2-Não");

}

document.getElementById("aluno").innerHTML = aluno;
document.getElementById("mediaTurma").innerHTML = tMediaTurma;
document.getElementById("totalAprovados").innerHTML = TotalAprovados;
document.getElementById("totalReprovadosFalta").innerHTML = tAlunoRepFalta;
document.getElementById("totalReprovadosNota").innerHTML = tAlunoRepNota;
document.getElementById("mediamaior").innerHTML = mediaMaior;
document.getElementById("medidamenor").innerHTML = mediaMenor;
