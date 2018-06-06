let list = [];
function dwarfRollCall(dwarves){

for(var i = 0; i < dwarves.length; i++){
  list.push(`${i + 1}. ${dwarves[i]} `);
}
  return list.join('');
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
      return true
    }
  }
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++){
    if(foods[i] === 'cheddar'){
      return 'cheddar'
      }
    }
    if(foods.indexOf('cheddar') === -1){
      return 'no cheese!'
    }
  }
