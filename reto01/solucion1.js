// 300 puntos
// 3751 ops/s (Más alto es mejor)
// Complejidad cognitiva: 7 (Más bajo es mejor)

function createMagicPotion(potions, target) {

  let solution = undefined

  for(let i=0;i<potions.length-1;i++) {
    let p = potions[i]
    if(p==target) {
      continue
    }
    else {
      for(let j=i+1;j<potions.length;j++) {
        let p2 = potions[j]

        if(p + p2 == target) {
          // comparamos si la solución es mejor
          if( solution == undefined || solution[1] > j)
            solution = [i, j]
        }
      }
    }
  }
  
  return solution
}
