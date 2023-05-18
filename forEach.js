const notas = [10, 4, 8, 5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);

// O método forEach() executa uma dada função em cada elemento de um array.
