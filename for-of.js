const notas = [5, 6, 8, 7];

let somasDasNotas = 0;

for (let nota of notas) {
  somasDasNotas += nota;
}

const media = somasDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

// O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
