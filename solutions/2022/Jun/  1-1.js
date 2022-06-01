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

const recoverSecret1 = function (triplets1) {
  const scrambled = Array.from(new Set(triplets1.flat()))
  let repeat = false
  triplets1.forEach(triplet => {
    if (scrambled.indexOf(triplet[2]) < scrambled.indexOf(triplet[1])) {
      scrambled.splice(scrambled.indexOf(triplet[1]) + 1, 0, triplet[2])
      console.log(scrambled)
      repeat = true
    }
    if (scrambled.indexOf(triplet[1]) < scrambled.indexOf(triplet[0])) {
      scrambled.splice(scrambled.indexOf(triplet[0]) + 1, 0, triplet[1])
      console.log(scrambled)
      repeat = true
    }
  })
  console.log(repeat)
  return repeat ? recoverSecret1(triplets1) : scrambled.join('')
}

const triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]

recoverSecret1(triplets1)
