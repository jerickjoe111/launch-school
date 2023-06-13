let list = ['ZZZ', 'bbb', 'AaA'];

list.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) return - 1;
  else if (b < a) return 1;
  else return 0;
})

console.log(
  list
)

