const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  console.log(nome);
}); // ForEach com function

nomes.forEach((nome) => {
  console.log(nome);
}); // ForEach com Arrow function

function imprimeNome(nome) {
  console.log(nome);
} // Declarar uma function e depois passar o ForEach

nomes.forEach(imprimeNome);

// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
