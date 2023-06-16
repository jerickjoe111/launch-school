// The mode of a group of numbers is the value (or values) 
// that occur most often (values have to occur more than once). 

// Given a sorted array of numbers, return an array of all modes in ascending order.

// Examples
// mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

// mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

// mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]
/*

input: an array of elements (just numbers???)

output: the mode of that input array
        (
          a list of element/s that occurr most often
        )

------------ **Types Involved** -------------

just numbers???
just primitives???

we should convert all the types to the same type ???

or compare in string form ???

------------ **Caveats & Questions** -------------

bad inputs? => []
empty inputs? => []
some kind of validation?
sparse areas???? !!!!!!

all uniques ???? => []

------------ Examples/Test Cases/Edge's ------------

[1, 2, 3,3] => [3]
[] => []
[1, 2, 3] => []

[1, 1, 1] ???? => []
[1, 2, '1'] ???? => []

mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]

------------------ Strategies ------------------

HUNCH ???
{
  filter out sparse areas
  get count of every element, 
  get higher count(s)
  get all elemennts with that count in array
}

helpers

    count occurrences of element in array

object to store each element and its occurrences in input array


-------------------- Algorithm ---------------------

1. init. occurrences object

2. get array of unique items

3. for each unique item 

    store item and count in occurrences object

4. find max occurrence from occurrences object (mode)

5. init output array

6. for each property in occurrences, 

    add item (as number) to output array

7. sort output array

8. return output array

---------------------- Notes -----------------------

*/

function mode(array) {
  function occurrences(value) {
    return array.filter(e => e === value).length;
  }
  
  function uniques(array) {
    return [...new Set(array)];
  }

  let occurrencesObject = {};
  let uniqueNumbers = uniques(array);
  for (let i = 0; i < uniqueNumbers.length; i += 1) {
    let number = uniqueNumbers[i];
    occurrencesObject[number] = occurrences(number);
  }

  let mode = 0;
  for (let number in occurrencesObject ) {
    let numberCount = occurrencesObject[number]
    if (numberCount > mode) mode = numberCount;
  }

  let output = [];
  for (let number in occurrencesObject ) {
    let numberCount = occurrencesObject[number]
    if (numberCount === mode) output.push(Number(number));
  }

  return output
}

console.log(
  mode([4, 5, 6, 6, 6, 7, 7, 9, 10]),
  mode([4, 5, 5, 6, 7, 8, 8, 9, 9]),
  mode([1, 2, 2, 3, 6, 6, 7, 9])
)

// mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

// mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

// mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]