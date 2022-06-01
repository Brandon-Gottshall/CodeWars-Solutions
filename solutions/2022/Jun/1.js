/*
There is a secret string which is unknown to you.
Given a collection of random triplets from the string,
recover the original string. A triplet here is defined as
a sequence of three letters such that each letter occurs
somewhere before the next in the given string. "whi" is
a triplet for the string "whatisup". As a simplification,
you may assume that no letter occurs more than once in the
secret string. You can assume nothing about the triplets
given to you other than that they are valid triplets and
that they contain sufficient information to deduce the
original string. In particular, this means that the secret
string will never contain letters that do not occur in
one of the triplets given to you.
*/

// Attempt 1:
// const recoverSecret = function(triplets) {
//   const scrambled = Array.from(new Set(triplets.flat()))
//   return unscramble(scrambled)
// }

// const unscramble = function(scrambled) {
//   let repeat = false
//   triplets.forEach(triplet => {
//     if (scrambled.indexOf(triplet[2]) < scrambled.indexOf(triplet[1])) {
//       scrambled.splice(scrambled.indexOf(triplet[2]), 1)
//       scrambled.splice(scrambled.indexOf(triplet[1]) + 1, 0, triplet[2])
//       console.log(scrambled)
//       repeat = true
//     }
//     if (scrambled.indexOf(triplet[1]) < scrambled.indexOf(triplet[0])) {
//       scrambled.splice(scrambled.indexOf(triplet[1]), 1)
//       scrambled.splice(scrambled.indexOf(triplet[0]) + 1, 0, triplet[1])
//       console.log(scrambled)
//       repeat = true
//     }
//   })
//   console.log(repeat)
//   return repeat ? unscramble(scrambled) : scrambled.join('')
// }

// Attempt 2:
// const recoverSecret = function(triplets1) {
//   const scrambled = Array.from(new Set(triplets1.flat()))
//   console.log(triplets1)
//   console.log(scrambled)
//   return unscramble(scrambled)
// }

// const unscramble = function(scrambled) {
//   let repeat = false
//   triplets1.forEach(triplet => {
//     if (scrambled.indexOf(triplet[2]) < scrambled.indexOf(triplet[1])) { 
//       scrambled.splice(scrambled.indexOf(triplet[1]) + 1, 0, triplet[2])
//       if (scrambled.indexOf(triplet1[2]) !== scrambled.lastIndexOf(triplet1[2])) {
//         scrambled.splice(scrambled.lastIndexOf(triplet1[2]), 1)
//       }
//       repeat = true
//     }
//     if (scrambled.indexOf(triplet[1]) < scrambled.indexOf(triplet[0])) {
//       scrambled.splice(scrambled.indexOf(triplet[0]) + 1, 0, triplet[1])
//       if (scrambled.indexOf(triplet1[1]) !== scrambled.lastIndexOf(triplet1[1])) {
//         scrambled.splice(scrambled.lastIndexOf(triplet1[1]), 1)
//       }
//       repeat = true
//     }
//   })
//   console.log(scrambled)
//   console.log(repeat)
//   return repeat ? unscramble(scrambled) : scrambled.join('')
// }

// Attempt 3:

// const recoverSecret = function(triplets1) {
//   const scrambled = Array.from(new Set(triplets1.flat()))
//   console.log(triplets1)
//   console.log(scrambled)
//   return unscramble(scrambled, triplets1=triplets1)
// }

// const unscramble = function(scrambled, triplets1) {
//   let repeat = false
//   triplets1.every(triplet => {
//     if (scrambled.indexOf(triplet[2]) < scrambled.indexOf(triplet[1])) { 
//       scrambled.splice(scrambled.indexOf(triplet[1]) + 1, 0, triplet[2])
//       if (scrambled.indexOf(triplet[2]) !== scrambled.lastIndexOf(triplet[2])) {
//         scrambled.splice(scrambled.indexOf(triplet[2]), 1)
//       }
//       console.log(`Moved 2: ${triplet[2]} after 1: ${triplet[1]}`)
//       repeat = true
//       return false
//     }
//     if (scrambled.indexOf(triplet[1]) < scrambled.indexOf(triplet[0])) {
//       scrambled.splice(scrambled.indexOf(triplet[0]) + 1, 0, triplet[1])
//       if (scrambled.indexOf(triplet[1]) !== scrambled.lastIndexOf(triplet[1])) {
//         scrambled.splice(scrambled.indexOf(triplet[1]), 1)
//       }
//       console.log(`Moved 1: ${triplet[1]} after 0: ${triplet[0]}`)
//       repeat = true
//       return false
//     }
//     return true
//   })
//   console.log(scrambled.join(''))
//   console.log(repeat)
//   return repeat ? unscramble(scrambled, triplets1) : scrambled.join('')
// }

// Final Refactor

const recoverSecret = function(triplets1) {
  const scrambled = Array.from(new Set(triplets1.flat()))
  console.log(triplets1)
  console.log(scrambled)
  return unscramble(scrambled, triplets1=triplets1)
}

const unscramble = function(scrambled, triplets1) {
  let repeat = false
  triplets1.every(triplet => {
    if (scrambled.indexOf(triplet[2]) < scrambled.indexOf(triplet[1])) { 
      scrambled.splice(scrambled.indexOf(triplet[1]) + 1, 0, triplet[2])
      if (scrambled.indexOf(triplet[2]) !== scrambled.lastIndexOf(triplet[2])) {
        scrambled.splice(scrambled.indexOf(triplet[2]), 1)
      }
      console.log(`Moved 2: ${triplet[2]} after 1: ${triplet[1]}`)
      repeat = true
      return false
    }
    if (scrambled.indexOf(triplet[1]) < scrambled.indexOf(triplet[0])) {
      scrambled.splice(scrambled.indexOf(triplet[0]) + 1, 0, triplet[1])
      if (scrambled.indexOf(triplet[1]) !== scrambled.lastIndexOf(triplet[1])) {
        scrambled.splice(scrambled.indexOf(triplet[1]), 1)
      }
      console.log(`Moved 1: ${triplet[1]} after 0: ${triplet[0]}`)
      repeat = true
      return false
    }
    return true
  })
  console.log(scrambled.join(''))
  console.log(repeat)
  return repeat ? unscramble(scrambled, triplets1) : scrambled.join('')
}

// const triplets = [
//   ['t', 'u', 'p'],
//   ['w', 'h', 'i'],
//   ['t', 's', 'u'],
//   ['a', 't', 's'],
//   ['h', 'a', 'p'],
//   ['t', 'i', 's'],
//   ['w', 'h', 's']
// ]
const triplets = [
  [ 't', 's', 'f' ],
  [ 'a', 's', 'u' ],
  [ 'm', 'a', 'f' ],
  [ 'a', 'i', 'n' ],
  [ 's', 'u', 'n' ],
  [ 'm', 'f', 'u' ],
  [ 'a', 't', 'h' ],
  [ 't', 'h', 'i' ],
  [ 'h', 'i', 'f' ],
  [ 'm', 'h', 'f' ],
  [ 'a', 'u', 'n' ],
  [ 'm', 'a', 't' ],
  [ 'f', 'u', 'n' ],
  [ 'h', 's', 'n' ],
  [ 'a', 'i', 's' ],
  [ 'm', 's', 'n' ],
  [ 'm', 's', 'u' ] 
]
export {recoverSecret, triplets}