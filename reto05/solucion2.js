// 160 points
// 3,924 ops/s (Higher is better)
// Cognitive complexity: 16 (Lower is better)

function escapePyramidHead(room) {
  
  function findStart(room) {
    let i, j
    let length = room.length
    for(j=0;j<length;j++) {
      for(i=0;i<length;i++) {
        if( room[j][i] == '▲' ) {
          return {x: i, y: j}
        }
      }
    }
  }

  function doMovementIfPossible(
    deltax, deltay, iteration) {

    let newx = iteration.position.x + deltax
    let newy = iteration.position.y + deltay
    
    if( room[newy][newx] == 'T' ) {
      if(
        iteration.steps == -1 ||
        iteration.pathLength < iteration.steps ) {
        iteration.steps = iteration.pathLength
      }
      return
    }

    if ( room[newy][newx] == '.' ) {
      
      // validamos si hemos llegado al final
      // para evitar hacer más pasos

      let oldPosition = iteration.position
      iteration.position = { x: newx, y: newy}
      recursive(iteration)
      iteration.position = oldPosition
    }
  }

  function recursive(iteration) {

    let border = iteration.room.length
    let x = iteration.position.x
    let y = iteration.position.y

    iteration.pathLength++
    iteration.room[y][x] = '*'

    if( x < border - 1) {
      // podemos tirar a la derecha en teoria
      doMovementIfPossible(1, 0, iteration)
    }

    if( x > 0 ) {
      // podemos tirar a la izquierda en teoria
      doMovementIfPossible(-1, 0, iteration)
    }

    if( y < border - 1) {
      // podemos tirar hacía abajo en teoria
      doMovementIfPossible(0, 1, iteration)
    }

    if( y > 0 ) {
      // podemos tirar hacía arriba en teoria
      doMovementIfPossible(0, -1, iteration)
    }

    iteration.pathLength--
    iteration.room[y][x] = '.'

  }

  let start = findStart(room)

  let iteration = {position: start, steps: -1, pathLength: 0, room: room}

  recursive(iteration)

  return iteration.steps
}
