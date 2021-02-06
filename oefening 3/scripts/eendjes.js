'use strict';

const eendjes = [5, 2, 4, 1, 1, 5, 4, 4, 3, 2];
console.log(
  `De beginpositie voor de eendjes ${eendjes} met de hoogste score is ${
    berekenPositieMaxScore(eendjes) + 1
  }`
);

const eendjesVanGebruiker = [];
for (let i = 0; i < 10; i++) {
  eendjesVanGebruiker[i] = parseInt(
    prompt(`Geef de waarde in voor eendje ${i + 1}: `)
  );
}
console.log(
  `De beginpositie voor de eendjes ${eendjesVanGebruiker} met de hoogste score is ${
    berekenPositieMaxScore(eendjesVanGebruiker) + 1
  }`
);

function berekenPositieMaxScore(eendjes) {
  let score = 0;
  let positie = 0;
  for (let i = 0; i <= eendjes.length - 4; i++) {
    let nieuweScore = 0;
    for (let j = i; j < i + 4; j++) nieuweScore += eendjes[j];
    if (nieuweScore > score) {
      positie = i;
      score = nieuweScore;
    }
  }
  return positie;
}
