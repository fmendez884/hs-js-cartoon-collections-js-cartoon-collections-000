function dwarfRollCall(dwarves) {
  let roll = []
  let i = 0
    while (i < dwarves.length){
      roll.push(`${i+1}. ${dwarves[i]} `)
        i++
    }
    return roll.join('') 
}

function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i < planeteerCalls.length; i++){
   planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      return true
    }
    else { 
    return false
    }
  }
}

function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++){
    if (foods[i] === "gouda" || foods[i] === "cheddar" || foods[i] === "camembert"){
      return foods[i]
    }
  }
  return "no cheese!"
} 