const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    const indice = listaDeAlunosEMedias[0].indexOf(aluno);
    const mediaDoAluno = listaDeAlunosEMedias[1][indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("João");

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
