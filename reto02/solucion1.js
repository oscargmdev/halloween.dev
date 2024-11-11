// 400 points
// 4,795 ops/s (Higher is better)
// Cognitive complexity: 7 (Lower is better)

function battleHorde(zombies, humans) {
  let i, zi, hi, zd = 0, hd = 0, zr, hr

  for(i=0;i<zombies.length;i++) {
    zi = +zombies[i]
    hi = +humans[i]
    zr = zi + zd
    hr = hi + hd

    if(zr > hr ) {
      zd = zr - hr
      hd = 0
    } else if (zr < hr) {
      hd = hr - zr
      zd = 0
    }
    else {
      zd = 0
      hd = 0
    }
  }

  if( zd == 0 && hd == 0)
    return 'x'
  else if (zd == 0)
    return hd + 'h'
  else
    return zd + 'z'
}
