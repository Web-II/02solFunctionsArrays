export function vertaal(zin) {
  let pzin = [],
    lettersTeHerhalen = [];

  for (const letter of zin) {
    if ("aeiouAEIOU".indexOf(letter) > -1) {
      lettersTeHerhalen.push(letter);
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = [];
      }
    }
    pzin.push(letter);
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaal(pzin, lettersTeHerhalen);
  }
  return pzin.join("");
}

function herhaal(zin, lettersTeHerhalen) {
  zin.push("p");
  return zin.concat(lettersTeHerhalen);
}
