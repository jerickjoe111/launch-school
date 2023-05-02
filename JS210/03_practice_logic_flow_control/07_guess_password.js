// Write a password guessing program that tracks how many times the user 
// enters the wrong password. If the user enters the password wrong three times, 
// log 'You have been denied access.' and terminate the program. 
// If the password is correct, 
// log 'You have successfully logged in.' and end the program.

function login() {
  const MAX_TRIES = 3;

  const PASSWORD = 'password';

  const INPUT_PROMPT_MESSAGE = 'Please, enter a password.';
  const SUCCESS_LOGIN_MESSAGE = 'You have successfully logged in.';
  const ERROR_LOGIN_MESSAGE = 'You have been denied access.';
  
  for(let i = 0; i < MAX_TRIES; i += 1) {
    let passwordInput = prompt(INPUT_PROMPT_MESSAGE);
    if (passwordInput === PASSWORD) {
      console.log(SUCCESS_LOGIN_MESSAGE);
      return;
    }
  }

  console.log(ERROR_LOGIN_MESSAGE);
  return
}