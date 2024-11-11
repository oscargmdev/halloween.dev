// 440 puntos
// 4,821 ops/s (Higher is better)
// Cognitive complexity: 4 (Lower is better)

function battleHorde(zombies, humans) {
  let i, zi, hi, zd = 0, hd = 0, zr, hr, result

  for(i=0; i<zombies.length; i++) {
    zi = +zombies[i]
    hi = +humans[i]
    zr = zi + zd
    hr = hi + hd

    if(zr > hr ) {
      zd = zr - hr
      hd = 0
      result = zd + 'z'
    } else if (zr < hr) {
      hd = hr - zr
      zd = 0
      result = hd + 'h'
    } else {
      zd = 0
      hd = 0
      result = 'x'
    }
  }

  return result
}
