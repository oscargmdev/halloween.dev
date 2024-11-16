// 380 points
// 4,294 ops/s (Higher is better)
// Cognitive complexity: 8 (Lower is better)

function findSafestPath(dream) {

  function nextStep(iteration, dream) {
    let sizeI = dream[0].length - 1
    let sizeJ = dream.length - 1
    let i = iteration.i
    let j = iteration.j

    iteration.path.push(dream[j][i])

    if ( i == sizeI && j == sizeJ ) {
      // contamos el total
      let points = 0;
      for(let k=0;k<iteration.path.length;k++) {
        points += iteration.path[k]
      }

      if( points < iteration.bestPoints ) {
        iteration.bestPoints = points
      }
    } else {

      if( i < sizeI ) {
        iteration.i = i + 1
        nextStep(iteration, dream)
        iteration.i = i
        iteration.path.pop()
      }

      if( j < sizeJ ) {
        iteration.j = j + 1
        nextStep(iteration, dream)
        iteration.j = j
        iteration.path.pop()
      }
    }

    return
  }

  let iteration = { bestPoints: 999999, i: 0, j:0, path: [] }

  nextStep(iteration, dream)

  return iteration.bestPoints
}
