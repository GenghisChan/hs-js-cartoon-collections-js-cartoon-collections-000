function dwarfRollCall(list){
for(var i = 0; i < list.length; i++){
  list.push(`${i + 1}.${list[i]} `);
}
  return dwarves.join('');
}


function summonCaptainPlanet(planeteerCalls){
  //excitedPlanateer could be outside of function
  //depending if we want to reuse the variable
  let excitedPlaneteers = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    excitedPlaneteers.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return excitedPlaneteers;
}


function longPlaneteerCalls(words) {
for(var i = 0; i < words.length; i++){
    if(words[i].length <= 4){
      return false;
    } else{
      return true;
    }
  }
}

function findTheCheese (foods) {
  for(var i = 0; i < food.length; i++){
    if(food[i] === 'cheddar' || food[i] === 'gouda' || food[i] === 'camembert'){
    return food[i];
    }
  }
  return "no cheese!";
  }
}
