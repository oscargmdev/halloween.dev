// 340 points
// 3,678 ops/s (Higher is better)
// Cognitive complexity: 4 (Lower is better)

function findTheKiller(whisper, suspects) {
  // Code here
  let result = []

  // Convert the whisper into a regex
  let whisperConverted = '^' + whisper.replaceAll('~', '.')
  if(whisperConverted.endsWith('.')) {
    whisperConverted += '+$' 
  }

  //functionResult = whisperConverted

  let r = new RegExp(whisperConverted, 'i')
  
  suspects.forEach( s => {
    if (r.test(s)) {
      result.push(s)
    }
  })

  return result.join()
}
