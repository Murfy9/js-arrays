const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// Remover elementos duplicados de um Array

// const meuSet = new Set(nomes);
// const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

// O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
