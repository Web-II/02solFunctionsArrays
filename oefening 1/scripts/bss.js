const keuzeGebruiker = prompt("Kies je blad, steen of schaar?");
let keuzeComputer = Math.random();
if (keuzeComputer < 0.34) {
	keuzeComputer = "blad";
} else if(keuzeComputer <= 0.67) {
	keuzeComputer = "steen";
} else {
	keuzeComputer = "schaar";
}
console.log(vergelijk(keuzeGebruiker, keuzeComputer));

function vergelijk(keuze1, keuze2)
{
    if (keuze1===keuze2){
        return "Het resultaat is een gelijkspel!";
    }
    if (keuze1==="steen")
    {
        if (keuze2==="schaar")
            return "steen wint";
            else
            return "blad wint";
    }
    if (keuze1==="blad")
    {
        if (keuze2==="steen")
            return "blad wint";
            else
            return "schaar wint";
    }  
    if (keuze1==="schaar")
    {
        if (keuze2 === "steen")
            return "steen wint";
        else
            return "schaar wint";
    }  
  
}
