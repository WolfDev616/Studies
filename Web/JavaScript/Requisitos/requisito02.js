// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.


// Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado
// em ordem alfabética. Função: ordenarNomes

// Exemplo Entrada: // ordenarNomes(['Ana', 'Elias', 'Carlos', 'Beatriz']);
// Exemplo Saída: // ['Ana', 'Beatriz', 'Carlos', ‘Elias’]
const deities = [
  "Zeus",
  "Odin",
  "Ra",
  "Anubis",
  "Athena",
  "Thor",
  "Loki",
  "Shiva",
  "Vishnu",
  "Kali",
  "Hades",
  "Persephone",
  "Apollo",
  "Artemis",
  "Ares",
  "Hera",
  "Freya",
  "Tyr",
  "Quetzalcoatl",
  "Tezcatlipoca",
  "Amaterasu",
  "Susanoo"
];


function orderNames(array) {
    let sortedArray = array.sort()
    console.log(sortedArray)
}

orderNames(deities)