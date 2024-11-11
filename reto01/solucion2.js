// 410 puntos
// 4,062 ops/s (Higher is better)
// Cognitive complexity: 6 (Lower is better)

function createMagicPotion(potions, target) {

  let solution = undefined
  let i, j, p, comp, p2

  for(i=0;i<potions.length-1;i++) {
    p = potions[i]
    comp = target - p

    for(j=i+1;j<potions.length;j++) {
      p2 = potions[j]

      if(p2 == comp) {
        // comparamos si la solución es mejor
        if( solution == undefined || solution[1] > j)
          solution = [i, j]
      }
    }
  }
  
  return solution
}
