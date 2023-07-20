const Account = function() {
  const displayNameLength = 16;

  let accounts = {};

  function generateId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result;
    do {
      result = '';
      for (let i = 0; i < displayNameLength; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    } while (result in accounts)

    return result;
  }; 


  return {
    init(email, password, firstName, lastName) {
      this.displayName = generateId();
      accounts[this.displayName] = { email, password, firstName, lastName };
      return this;
    },

    reanonymize(password) {
      const account = accounts[this.displayName];
      if (password !== account.password) return 'Invalid Password';

      delete account[this.displayName];
      this.displayName = generateId();
      accounts[this.displayName] = account;
      return true;
    },

    resetPassword(password, newPassword) {
      const account = accounts[this.displayName];
      if (password !== account.password) return 'Invalid Password';

      account.password = newPassword;
      return true;
    },

    firstName(password) {
      const account = accounts[this.displayName];
      if (password !== account.password) return 'Invalid Password';

      return account.firstName;
    },

    lastName(password) {
      const account = accounts[this.displayName];
      if (password !== account.password) return 'Invalid Password';

      return account.lastName;
    },

    email(password) {
      const account = accounts[this.displayName];
      if (password !== account.password) return 'Invalid Password';

      return account.email;
    },
  };
}()


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'

