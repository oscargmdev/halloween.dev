// 460 puntos
// 4,090 ops/s (Higher is better)
// Cognitive complexity: 3 (Lower is better)


function findTheKiller(whisper, suspects) {

  //if( whisper == '') return ''

  // Convert the whisper into a regex
  let whisperConverted = '^' + whisper.replaceAll('~', '.')
  if(whisperConverted.endsWith('.')) {
    whisperConverted += '+$' 
  }

  let r = new RegExp(whisperConverted, 'i')
  
  return suspects.filter( s => r.test(s)).join()
}
