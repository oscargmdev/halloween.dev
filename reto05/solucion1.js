// 60 points
// 3,528 ops/s (Higher is better)
// Cognitive complexity: 23 (Lower is better)

function escapePyramidHead(room) {
  // Code here

  function findStart(room) {
    let i, j, result = {x: -1, y: -1}
    for(j=0;j<room.length;j++) {
      for(i=0;i<room[j].length;i++) {
        if( room[j][i] == '▲' ) {
          result.x = i
          result.y = j
        }
      }
    }
    return result
  }

  function isValidMovement(position, iteration, room) {
    let rep = room[position.y][position.x]
    let value = (rep == '.' || rep == 'T')

    if ( value == true ) {
      let k, x_k, y_k
      for(k=0;k<iteration.path.length;k++) {
        x_k = iteration.path[k].x
        y_k = iteration.path[k].y
        if( x_k == position.x && y_k == position.y) {
          value = false
        }
      }
    }

    return value
  }

  function doMovement(position, iteration, room) {
    if ( isValidMovement(position, iteration, room) ) {
      recursive(position, iteration, room)
      iteration.path.pop()
    }
  }

  function recursive(position, iteration, room) {
    iteration.path.push(position)

    if( room[position.y][position.x] == 'T') {
      if( iteration.steps == -1 || iteration.path.length < iteration.steps) {
        iteration.steps = iteration.path.length
      }
      return
    }

    if( position.x < room.length - 1) {
      // podemos tirar a la derecha
      let newPosition = {x: position.x + 1, y: position.y}
      doMovement(newPosition, iteration, room)
    }

    if( position.x > 0 ) {
      // podemos tirar a la izquierda
      let newPosition = {x: position.x - 1, y: position.y}
      doMovement(newPosition, iteration, room)
    }

    if( position.y < room.length - 1) {
      // podemos tirar hacía abajo
      let newPosition = {x: position.x, y: position.y + 1}
      doMovement(newPosition, iteration, room)
    }

    if( position.y > 0 ) {
      // podemos tirar hacía arriba
      let newPosition = {x: position.x, y: position.y - 1}
      doMovement(newPosition, iteration, room)
    }

  }

  let start = findStart(room)
  let iteration = {path: [], steps: -1, trace: null}

  recursive(start, iteration, room)

  return iteration.steps > 0 ? iteration.steps - 1 : -1
}
