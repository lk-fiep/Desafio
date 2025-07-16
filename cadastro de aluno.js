const aluno = {
  nome: "Mateus",
  idade: 22,
  curso: "Tec. Desenvolvimento de Sistemas",
  notas: [8, 7, 9],
};

const calcularMedia = (notas) => {
  const soma = notas.reduce((soma, nota) => soma + nota, 0);
  return soma / notas.length;
};

const media = calcularMedia(aluno.notas);
const status = media >= 7 ? "Aprovado" : "Reprovado";

console.log(
  `Aluno: ${aluno.nome},
   Idade: ${aluno.idade},
    Curso: ${aluno.curso},
     Média: ${media.toFixed(
    2
  )},
 Status: ${status}`
);
