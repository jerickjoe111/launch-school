// The objective of this practice problem is to build a function 
// that parses a string of email data. 
// The function takes an argument that contains the data, parses it, 
// then produces two basic statistics about the email:

  // The number of email messages found in the string
  // The date range of the email messages
  // The email messages string has the following characteristics:

// The string contains multiple email messages separated by the delimiter string ##||##.

  // Each email message has five parts. The delimiter string #/# separates the parts.

  // The five parts are:

      // Sender
      // Subject
      // Date
      // Recipient
      // Body
      // All five parts occur in the sequence shown above.


// count number of emails
// get earliest date, latest date

// get email count:

//   count the number of email separators + 1

// get dates:

//   get dates in array

//   sort dates

//   get first, last date

function mailCount(emailData) {
  const EMAIL_SEPARATOR = '##||##';
  const PART_SEPARATOR = '#/#';
  const DATE_FORMAT = /Date: [0-9\-]{10}/ig;
  const ENDING_DATE_INDEX = 15;
  
  function sortDates(dates) {
    return dates.sort((dateA, dateB) => {
        if (dateA > dateB) return 1;
        else if (dateA < dateB) return -1;
        else return 0;
      }
    );
  }
          
  function dateFormat(date) { return String(date).slice(0, ENDING_DATE_INDEX); }

  let emails = emailData.split(EMAIL_SEPARATOR).length;
  let dates = sortDates(emailData
                      .match(DATE_FORMAT)
                      .map(date => new Date(date.slice(date.indexOf(' ') + 1))))

  console.log(`Count of Email: ${emails}`)
  console.log(`Date Range: ${dateFormat(dates[0])} - ${dateFormat(dates[dates.length - 1])}`)
}

mailCount(text)
