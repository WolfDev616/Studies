// Módulo Projeto Laboratório de Fundamentos

// Lembre-se de que os requisitos podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.

// Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
// nela.
// Função: contarVogais.
// Exemplo Entrada: // contarVogais("Olá, tudo bem?");
// Exemplo Saída: // 5

const queenSpeech = 
    "O Radagon, leal hound of the Golden Order. Thou’rt yet to become me. Thou’rt yet to become a god. Let us be shattered, both.";

const marikaEcho1 =
  "My Lord, and thy warriors. I divest each of thee of thy grace. With thine eyes dimmed, ye will be driven from the Lands Between.";

const marikaEcho2 =
  "Then, after thy death, I will give back what I once claimed. Return to the Lands Between, wage war, and brandish the Elden Ring.";

const marikaEcho3 =
  "The Erdtree governs all. The choice is thine. Become one with the Order. Or divest thyself of it.";

const marikaEcho4 =
  "Hear me, Demigods. My children beloved. Make of thyselves that which ye desire. Be it a Lord. Be it a God.";

const marikaEcho5 =
  "O Radagon, leal hound of the Golden Order. Thou'rt yet to become me. Thou'rt yet to become a god. Let us be shattered, both.";

const marikaEcho6 =
  "I declare mine intent, to search the depths of the Golden Order. Through understanding of the proper way, our faith, our grace, is increased.";

const marikaEcho7 =
  "Hark, brave warriors. Hark, my lord Godfrey. We commend your deeds. Put the Giants to the sword, and confine the flame atop the mount.";

function countVowels(string) {
    const filteredString = string.split("")

    const vowels = [
        a = "a", 
        e = "e",
        i = "i",
        o = "o",
        u = "u"
    ]

    const vowelsCounts = [
        aCount = filteredString.filter(item => item === a).length,
        eCount = filteredString.filter(item => item === e).length,
        iCount = filteredString.filter(item => item === i).length,
        oCount = filteredString.filter(item => item === o).length,
        uCount = filteredString.filter(item => item === u).length,
    ]

    console.log(`The quantity of vowels in this sentence is ${aCount + eCount + iCount + oCount + uCount}, being ${aCount} letter a, ${eCount} letter e, ${iCount} letter i, ${oCount} letter o and ${uCount} letter u.`)

}

countVowels(marikaEcho7)