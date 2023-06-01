// Write a program that determines the sentence with the most words in some text. 
// Sentences may end with periods (.), exclamation points (!), or question marks (?).
// Sentences always begin with a word character. You should treat any sequence of 
// characters that are not spaces or sentence-ending characters, as a word. 
// Log the longest sentence and its word count to the console. 
// Pay attention to the expected output. Note that this problem 
// is about manipulating and processing strings. As such, every detail 
// about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

// - separate text in sentences

//     delimiter: . ! ? 

// - separate sentences in words

//     delimiter: , spaces, ; -- 

// - get max sentences in number of words

//     min sentence = first sentence

//     for every sentence after the first:

//         if sentece is less, reassign min sentence

// display sentence and number of words

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth!';

function longestSentence(text) {
  const SENTENCE_SEPARATOR = /[.!?]/g;
  const WORD_SEPARATOR = /\s/g

  function filterNonWords(sentence) { return sentence.filter(word => word.match(/\w/)) }

  let sentences = text.split(SENTENCE_SEPARATOR).map(sentence => sentence.split(WORD_SEPARATOR));

  let longestSentenceIndex = 0;
  let longestSentenceWordsSize = 0;
  let longestSentenceCharSize = 0;
  sentences.forEach(sentence => {
      let currentSentenceWordsSize = filterNonWords(sentence).length;
      if (currentSentenceWordsSize > longestSentenceWordsSize) {
        let sentenceString = sentence.join(' ');
        longestSentenceIndex = text.indexOf(sentenceString);
        longestSentenceCharSize = sentenceString.length;
        longestSentenceWordsSize = currentSentenceWordsSize;
      }
    }
  );

  let lastIndex = longestSentenceIndex + longestSentenceCharSize + 1;
  console.log(`The longest sentence is: ${text.slice(longestSentenceIndex, lastIndex)}\n`);
  console.log(`The longest sentence has ${longestSentenceWordsSize} words.\n`);
}

longestSentence(longText);
// longestSentence('Hello there! Why  not? Goodbye.');
// longestSentence('What\'s up, "Doc"? The brown fox is superlative!');

longestSentence('Hello!');
// Hello!
// The longest sentence has 1 words.

longestSentence('The brown fox is superlative! To be or not to be?');
// To be or not to be?
// The longest sentence has 6 words.

longestSentence("Hello there! Why   not? Goodbye.");
// Hello there!
// The longest sentence has 2 words.
