let cadastro = prompt("Voce deseja cadastrar um concorrente? \n 1-Sim \n 2-Não");
let totalCandidatos = 0;
let totalMasculino = 0;
let totalFeminino = 0;
let totalComExperiencia = 0;
let totalIdade = 0;
let candidatos = "";
let mediaIdade = 0;

for (let i = 0; i < 5; i++) {
  if (cadastro !== "1") {
    break;
  }

  let candidato = {};
  candidato.numero = Number(prompt("Insira o número do candidato:"));
  candidato.idade = Number(prompt("Insira a idade do candidato:"));
  candidato.sexo = prompt("Insira o sexo do candidato (M/F):").toLowerCase();
  candidato.experiencia = prompt("O candidato tem experiência profissional (S/N)?:").toLowerCase() === "s";

  totalCandidatos++;
  totalIdade += candidato.idade;

  if (candidato.sexo === "m") {
    totalMasculino++;
  } else {
    totalFeminino++;
  }

  if (candidato.experiencia && candidato.idade >= 18) {
    totalComExperiencia++;
  }

  candidatos.push(candidato);

  mediaIdade = totalIdade / totalCandidatos;

  cadastro = prompt("Voce deseja cadastrar um concorrente? \n 1-Sim \n 2-Não");
}

document.getElementById("mediacand").innerHTML = totalIdade;
document.getElementById("totalH").innerHTML = totalMasculino;
document.getElementById("totalM").innerHTML = totalFeminino;
document.getElementById("totalexp").innerHTML = totalComExperiencia;


