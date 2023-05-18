const notas = [10, 9.5, 8, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
}); // O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

console.log(notasAtualizadas);

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
  return nome.toUpperCase();
}); // O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.

console.log(nomesPadronizados);
