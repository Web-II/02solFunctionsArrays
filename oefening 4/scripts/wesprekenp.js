'use strict';

const zin = prompt('Geef een zin in: ');
//const zin="Als de kat van huis is, dansen de muizen";
alert(`De zin in P taal: ${vertaal(zin)}`);

function vertaal(zin) {
  let pzin = '';
  let lettersTeHerhalen = '';
  for (const letter of zin) {
    if ('aeiouAEIOU'.indexOf(letter) > -1) {
      lettersTeHerhalen += letter;
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = '';
      }
    }
    pzin += letter;
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaal(pzin, lettersTeHerhalen);
  }
  return pzin;
}

function herhaal(zin, lettersTeHerhalen) {
  return (zin += 'p' + lettersTeHerhalen);
}

/* Oplossing gebruik makend van Arrays */

// function vertaal(zin) {
//   let pzin = [];
//   let lettersTeHerhalen = [];
//   for (const letter of zin) {
//     if ('aeiouAEIOU'.indexOf(letter) > -1) {
//       lettersTeHerhalen.push(letter);
//     } else {
//       if (lettersTeHerhalen.length > 0) {
//         pzin = herhaal(pzin, lettersTeHerhalen);
//         lettersTeHerhalen = [];
//       }
//     }
//     pzin.push(letter);
//   }
//   if (lettersTeHerhalen.length > 0) {
//     pzin = herhaal(pzin, lettersTeHerhalen);
//   }
//   return pzin.join('');
// }

// function herhaal(zin, lettersTeHerhalen) {
//   zin.push('p');
//   return zin.concat(lettersTeHerhalen);
// }
