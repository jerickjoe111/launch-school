// Create a function which takes a string txt and expands it as per following rules:

// The numeric values represent the occurrence of each letter preceding that numeric value.

// stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
// The first occurrence of a numeric value should be the number of 
// times each character behind it is repeated, until the next numeric value appears.

// stringExpansion("3Mat")➞ "MMMaaattt"      // correct

// stringExpansion("3Mat") ➞ "MMMat"          // wrong
// stringExpansion("3Mat") ➞ "MatMatMat"      // wrong

// If there are consecutive numeric characters, ignore them all except last one.

// stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"

// If there are two consecutive alphabetic characters then the string will remain unchanged.

// stringExpansion("airforce") ➞ "airforce"

// Empty strings should return an empty string.
// stringExpansion("") ➞ ""

// Input: a string

// Output: a new string with characters repeated


// input composed by tokens


// [digits, characters]


// last digit from digits, is the number of repetitions

// characters: repeat each character that number of repetitions

// Strategy:

// helper, repeater(character, repetitions), return string with chars. repeated

// set repetitions to 1

// init. output string to ''

// For each character in input string

//     - if it is a number, set repetitions to that number

//     - if it is a letter, add repeated letter to output string repetitions number of times

// return output string

// r 3

// 3Mat mmmaaattt

// r 1

// Mat mat

function stringExpansion(string) {
  function repeater(character, repetitions) {
    let output = ''
    for (let i = 0; i < repetitions; i += 1) output += character;
    return output;
  }

  function isNumber(character) {
    return /\d/.test(character);
  }

  let output = ''
  let repetitions = 1;

  for (let i = 0; i < string.length; i += 1) {
    let character = string[i];

    if (isNumber(character)) repetitions = Number(character);
    else output += repeater(character, repetitions);
  }

  return output;
}


console.log(
  stringExpansion("3M2u5b2a1s1h2i1r") === "MMMuubbbbbaashiir",
  stringExpansion("3Mat") === "MMMaaattt",
  stringExpansion("3M123u42b12a") === "MMMuuubbaa",
  stringExpansion("3n6s7f3n") === "nnnssssssfffffffnnn",
  stringExpansion("0d4n8d2b") === "nnnnddddddddbb",
  stringExpansion("0c3b1n7m") === "bbbnmmmmmmm",
  stringExpansion("7m3j4ik2a") === "mmmmmmmjjjiiiikkkkaa",
  stringExpansion("3A5m3B3Y") === "AAAmmmmmBBBYYY",
  stringExpansion("5M0L8P1") === "MMMMMPPPPPPPP",
  stringExpansion("2B") === "BB",
  stringExpansion("7M1n3K") === "MMMMMMMnKKK",
  stringExpansion("A4g1b4d") === "Aggggbdddd",
  stringExpansion("111111") === "",
  stringExpansion("4d324n2") === "ddddnnnn",
  stringExpansion("5919nf3u") === "nnnnnnnnnfffffffffuuu",
  stringExpansion("2n1k523n4i") === "nnknnniiii",
  stringExpansion("6o23M32d") === "ooooooMMMdd",
  stringExpansion("1B44n3r") === "Bnnnnrrr",
  stringExpansion("M21d1r32") === "Mdr",
  stringExpansion("23M31r2r2") === "MMMrrr",
  stringExpansion("8494mM25K2A") === "mmmmMMMMKKKKKAA",
  stringExpansion("4A46D6B3C") === "AAAADDDDDDBBBBBBCCC",
  stringExpansion("23D42B3A") === "DDDBBAAA",
  stringExpansion("143D36C1A") === "DDDCCCCCCA",
  stringExpansion("asdf") === "asdf",
  stringExpansion("23jbjl1eb") === "jjjbbbjjjllleb",
  stringExpansion("43ibadsr3") === "iiibbbaaadddsssrrr",
  stringExpansion("123p9cdbjs") === "pppcccccccccdddddddddbbbbbbbbbjjjjjjjjjsssssssss",
  stringExpansion("2309ew7eh") === "eeeeeeeeewwwwwwwwweeeeeeehhhhhhh",
  stringExpansion("312987rfebd") === "rrrrrrrfffffffeeeeeeebbbbbbbddddddd",
  stringExpansion("126cgec") === "ccccccggggggeeeeeecccccc",
  stringExpansion("1chwq3rfb") === "chwqrrrfffbbb",
  stringExpansion("389fg21c") === "fffffffffgggggggggc",
  stringExpansion("239vbsac") === "vvvvvvvvvbbbbbbbbbsssssssssaaaaaaaaaccccccccc",
  stringExpansion("davhb327vuc") === "davhbvvvvvvvuuuuuuuccccccc",
  stringExpansion("cvyb239bved2dv") === "cvybbbbbbbbbbvvvvvvvvveeeeeeeeedddddddddddvv",
  stringExpansion("") === ""
  )




