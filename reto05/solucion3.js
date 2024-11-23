// 290 points
// 4,118 ops/s (Higher is better)
// Cognitive complexity: 14 (Lower is better)

function escapePyramidHead(room) {
  
  function findStart(room) {
    let length = room.length
    let i = 0, j = 0, k = 0
    while(room[j][i] != '▲') {
      k++
      j = (k/length)|0
      i = k%length
    }

    return {x: i, y: j}
  }

  function doMovementIfPossible(
    deltax, deltay, iteration) {

    let newx = iteration.position.x + deltax
    let newy = iteration.position.y + deltay
    let border = iteration.room.length

    if(
      newx < 0 ||
      newx == border ||
      newy <0 ||
      newy == border ) {
      return 
    }

    let item = room[newy][newx]

    // validamos si hemos llegado al final
    // para evitar hacer más pasos
    if( item == 'T' ) {
      if(
        iteration.steps == -1 ||
        iteration.pathLength < iteration.steps ) {
        iteration.steps = iteration.pathLength
      }
      return
    }

    if ( item == '.' ) {
      let oldPosition = iteration.position
      iteration.position = { x: newx, y: newy}
      recursive(iteration)
      iteration.position = oldPosition
    }
  }

  function recursive(iteration) {

    let x = iteration.position.x
    let y = iteration.position.y

    iteration.pathLength++
    iteration.room[y][x] = '*'

    doMovementIfPossible(1, 0, iteration)
    doMovementIfPossible(-1, 0, iteration)
    doMovementIfPossible(0, 1, iteration)
    doMovementIfPossible(0, -1, iteration)

    iteration.pathLength--
    iteration.room[y][x] = '.'

  }

  let start = findStart(room)

  let iteration = {
    position: start, 
    steps: -1, 
    pathLength: 0, 
    room: room}

  recursive(iteration)

  return iteration.steps
}
