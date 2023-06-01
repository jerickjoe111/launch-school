// Implement a function that takes some text as an argument and logs some 
// information about whether the text has 
// a positive, negative, or neutral sentiment.

// get an array of words in the text

// for every word in positive words list, add occurrence to a pos. counter
// for every word in negative words list, add occurrence to a neg. counter

// compute sentiment

// log result

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

function sentiment(text) {
  const POSITIVE_WORDS = [
    'fortune', 'dream', 'love', 'respect', 
    'patience', 'devout', 'noble', 'resolution'
  ];
  const NEGATIVE_WORDS = [
    'die', 'heartache', 'death', 'despise', 
    'scorn', 'weary', 'trouble', 'oppress'
  ];

  let wordsInText = text.split(/[\s-\,\.]/)

  let positiveWords = [];
  let negativeWords = [];
  wordsInText.forEach(word => {
     word = word.toLowerCase()
     if (POSITIVE_WORDS.includes(word)) positiveWords.push(word);
     else if (NEGATIVE_WORDS.includes(word)) negativeWords.push(word);
   }
  )

  console.log(`There are ${positiveWords.length} positive words in the text.`);
  console.log('Positive sentiments: ' + positiveWords.join(', '));
  console.log('');
  console.log(`There are ${negativeWords.length} negative words in the text.`);
  console.log('Negative sentiments: ' + negativeWords.join(', '));
  console.log('');

  let sentiment;
  if (positiveWords.length > negativeWords.length) sentiment = 'Positive';
  else if (positiveWords.length < negativeWords.length) sentiment = 'Negative';
  else sentiment = 'Neutral';

  console.log(`The sentiment of the text is: ${sentiment}.`);
}

sentiment(textExcerpt);