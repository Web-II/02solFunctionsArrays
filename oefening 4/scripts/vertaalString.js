export function vertaal(zin) {
  let pzin = "",
    lettersTeHerhalen = "";
  for (const letter of zin) {
    if ("aeiouAEIOU".indexOf(letter) > -1) {
      lettersTeHerhalen += letter;
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = "";
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
  return (zin += "p" + lettersTeHerhalen);
}
