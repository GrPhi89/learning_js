// Globaler Bereich
var globalVar = "Ich bin eine globale Variable";
let globalLet = "Ich bin auch global, aber mit let scoped";
const globalConst = "Ich bin eine globale Konstante";

{
    // Blockbereich
    var blockVar = "Ich bin eine block-scope var";
    let blockLet = "Ich bin ein block-scope let";
    const blockConst = "Ich bin eine block-scope const";
}

// Globaer Gültigkeitsbereich

console.log(globalVar); //Ausgabe: "Ich bin eine globale Variable"
console.log(globalLet); //Ausgabe: "Ich bin auch global, aber mit let scope"
console.log(globalConst); //Ausgabe: "Ich bin eine globale Konstante"

//Blockbereich

//console.log(blockVar); //Ausgabe: "Ich bin eine block-scope var"
//console.log(blockLet); //Ausgabe: "Ich bin ein block-scope let"
//console.log(blockConst); //Ausgabe: "Ich bin eine block-scope const"

function show(){
    var functionVar = "Ich bin eine block-scope Variable";
    let functionLet = "Ich bin ein block-scope let";
    const functionConst = "Ich bin ein block-scope const";
    }
    show();
    
    console.log(functionVar); // Wirft ReferenceError
    console.log(functionLet); // Wirft ReferenceError
    console.log(functionConst); // Wirft ReferenceError