import { vertaal as vertaalString } from "./vertaalString.js";
import { vertaal as vertaalArray } from "./vertaalArray.js";

const zin = prompt("Geef een zin in: ");
//const zin="Als de kat van huis is, dansen de muizen";
alert(`De zin in P taal: ${vertaalString(zin)}`);

/* Oplossing gebruik makend van Arrays */
//alert(`De zin in P taal: ${vertaalArray(zin)}`);
