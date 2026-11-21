// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Requisito 13: Crie uma função que receba duas distâncias (distancia1 e distancia2) e retorne
// qual pessoa está mais próxima, indicando "Pessoa 1" se a primeira distância for menor,
// "Pessoa 2" se a segunda distância for menor, ou "Ambos estão a mesma distância" se as
// distâncias forem iguais.
// Função: calcularDistancia
// Exemplo Entrada: 
// // calcularDistancia(10, 15);
// // calcularDistancia(20, 15);
// // calcularDistancia(30, 30);
// Exemplo Saída: 
// // “Pessoa 1”
// // "Pessoa 2"
// "Ambos estão a mesma distância"

let person1_Distance = 15; 
let person2_Distance = 35; 
let person3_Distance = 27;
let person4_Distance = 27;


function calculateDistance(distance1, distance2) {
    let result = [
        a = "Both people are as distant.",
        b = "Person 1 is more distant than person 2.",
        c = "Person 2 is more distant than person 1."
    ]
    
    
    if (distance1 === distance2) {
        result = a
    } else if (distance1 > distance2) {
        result = b
    } else if (distance1 < distance2) {
        result = c
    }
    console.log(result)        
}

calculateDistance(person4_Distance, person3_Distance)