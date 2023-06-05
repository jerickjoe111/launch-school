// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the way in
//  which it's encoded.
//  It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, 
// then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN

// Encoder:

// input: a string of characters and a number of 'rails'

// output: a string of characters, input encoded 

// Examples:

// encode('EXERCISES', 4) => 'ESXIEECSR'
  
// 1  E     S     0
// 2   X   I  E   1
// 3    E C    S  2
// 4     R        3
   
// 1[EX]2[XIE]3[ECS]4[R]

// ip  0 1 2 3 4 5 6 7 8
//     E X E R C I S E S
// lv  0 1 2 3 2 1 0 1 2
//     1 2 3 4 3 2 1 2 3


// 1 = ES   0, 6     
// 2 = XIE  1, 5, 7
// 3 = ECS  2, 4, 8
// 4 = R    3, 

// encode('EXERCISES', 3) => 'EECSSXRIE'

// E   C   S
//  X R I E
//   E   S

// encode('EXERCISES', 2) => 'EECSSXRIE'

// E E C S S
//  X R I E