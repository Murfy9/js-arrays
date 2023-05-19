const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] < 7; // OU _ no primeiro parâmetro
});

console.log(reprovados);

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
