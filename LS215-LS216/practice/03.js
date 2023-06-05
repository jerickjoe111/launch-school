// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

// In such a case (no pair of prime numbers with a gap of `g`)
// In C: return [0, 0]
// In C++, Lua, COBOL: return `{0, 0}`. 
// In F#: return `[||]`. 
// In Kotlin, Dart and Prolog: return `[]`.
// In Pascal: return Type TGap (0, 0).

// Examples:
// - gap(2, 5, 7) --> [5, 7]

// gap(2, 5, 5) --> nil. 

// gap(4, 130, 200) --> [163, 167] ([193, 197] is also such a 4-gap primes between 130 and 200 but it's NOT THE FIRST PAIR)

// gap(6,100,110) --> nil: between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103 in between and 103-109 is not a 6-gap because there is 107in between.
                      //  THE PRIMES MUST BE SUCCESSIVE, IF THERE IS A PRIME BETWEEN THEM, IT'S NOT A VALID GAP

// You can see more examples of return in Sample Tests.

// input: 

// all valid integers?? (integers, g >= 2, m >= 2, n >= m)

// g: the size of the gap BETWEEN TWO SUCCESSIVE PRIMES we are looking for example (2, 5) is a gap 3, (7, 11) is a gap 4, 

// m: the start of the search (inclusive);

// n: the end of the search (inclusive);

// output: 

// the first pair with a gap g between the limits m and n; if no gap g exists, return null

// CAVEATS:
//   THE PRIMES MUST BE SUCCESSIVE, IF THERE IS A PRIME BETWEEN THEM, IT'S NOT A VALID GAP

// ...


// Strategies:

// count from m (start) to n (end) INCLUSIVE

// we've got to return the first => the time we get a valid gap, we return it (break and return)

// - FIND FIRST PRIME,

// - FIND SECOND PRIME, 

// - CHECK GAP SIZE: IF VALID, RETURN
//                   ELSE, CONTINUE FROM SECOND PRIME + 1

// INIT PRIME BUFFER []                  
// LOOP FROM M TO N, COUNTER: I

//   SKIP IF I NOT PRIME

//   IF I IS PRIME AND PRIME BUFFER IS EMPTY: 
//     STORE FIRST PRIME
//     CONTINUE
//   IF I IS PRIME AND THERE IS A NUMBER IN PRIME BUFFER:
//     CHECK GAP SIZE
//       RETURN GAP IF VALID
//       REMOVE FIRST INTEGER FROM BUFFER IF NOT VALID AND CONTINUE

// LOOP FINISHES

// RETURN NULL

// Algorithm:

// // - gap(2, 5, 7) --> [5, 7]

// // gap(2, 5, 5) --> nil. 

// // gap(4, 130, 200) --> [163, 167] ([193, 197] is also such a 4-gap primes between 130 and 200 but it's NOT THE FIRST PAIR)

function isPrime(integer) {
  for (divisor = 2; divisor < integer; divisor += 1) {
    if (integer % divisor === 0) return false;
  }
  return true;
}

function gapSize(integers) {
  return integers[1] - integers[0];
}

function gap(g, m, n) {
  let primeBuffer = [];
  for (i = m; i <= n; i += 1) {
    if (!isPrime(i)) continue;
    primeBuffer.push(i)
    if ( gapSize(primeBuffer) === g) {
        return primeBuffer;
    } else if ( gapSize(primeBuffer) !== g) {
      primeBuffer.shift();
    }
  }
  return null;
}

let a = gap(2, 5, 7)
let b = gap(6,100,110);
let c = gap(2, 5, 5)
let d = gap(4, 130, 200)
let e = gap(2, 3, 50)

// // gap(2, 5, 5) --> nil. 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);