// Exercise 05

// Todd wrote some simple code in an attempt to log his shop's financial transactions. 
// Each time he makes a sale or spends money on inventory, 
// he logs that deposit or withdrawal via the logTransaction function. 
// His code also intends to ensure that each transaction logged is a valid numerical amount. 
// At the end of each day, he displays his total gain or loss for the day with transactionTotal.

const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = 'y5.5';

  try {
    data = processInput(data);
    transactionLog.push(data);

    console.log('Thank you. Data accepted.');
  } catch (error) { // add error message to catch
    console.log(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());