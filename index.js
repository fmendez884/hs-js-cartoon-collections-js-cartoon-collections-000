// function dwarfRollCall(dwarves) {
//   let roll = []
//   let i = 0
//     while (i < dwarves.length){
//       roll.push(`${i+1}. ${dwarves[i]} `)
//         i++
//     }
//     return roll.join('') 
// }

// function dwarfRollCall(dwarves) {
//   let i = 0
//     while (i < dwarves.length){
//       dwarves[i] = `${i+1}. ${dwarves[i]} `
//         i++
//     }
//     return dwarves.join('')
// }

function dwarfRollCall(dwarves) {
  for (let i = dwarves.length /2; i < dwarves.length ; i++){
    dwarves[i] = `${i+1}. ${dwarves[i]}`;
  }
  return dwarves.join('');
}

function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i < planeteerCalls.length; i++){
   planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      return true;
    }
    else { 
    return false;
    }
  }
}

function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert" || foods[i] === "swiss"){
      return foods[i];
    }
  }
  return "no cheese!";
}




function wordsThatStartWithB(words){
wordsWithB = []
  for (let i = 0; i < words.length; i++ ){
    if(words[i][0] === "b"){ 
      wordsWithB.push(words[i])
    }
  }
  return wordsWithB
}

const someWord = "words"
someWord[0]
wordsThatStartWithB(["brian", "jill", "ashley"]) // ["brian"]
wordsThatStartWithB(["bill", "bob", "charlie"]) //  ["bill", "bob"]
