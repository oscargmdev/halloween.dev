// 400 points
// 4,009 ops/s (Higher is better)
// Cognitive complexity: 7 (Lower is better)

function findSafestPath(dream) {

  function nextStep(iteration, dream) {
    let sizeI = dream[0].length - 1
    let sizeJ = dream.length - 1
    let i = iteration.i
    let j = iteration.j

    iteration.currentPoints += dream[j][i]

    if ( i == sizeI && j == sizeJ ) {
      if( iteration.currentPoints < iteration.bestPoints ) {
        iteration.bestPoints = iteration.currentPoints
      }
    } else {

      if( i < sizeI ) {
        iteration.i = i + 1
        nextStep(iteration, dream)
        iteration.i = i
      }

      if( j < sizeJ ) {
        iteration.j = j + 1
        nextStep(iteration, dream)
        iteration.j = j
      }
    }

    iteration.currentPoints -= dream[j][i]

    return
  }

  let iteration = { currentPoints: 0, bestPoints: 999999, i: 0, j:0}

  nextStep(iteration, dream)

  return iteration.bestPoints
}
