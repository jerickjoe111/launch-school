function constfuncs() {
  let funcs = [];
  let counter = 0;
  for(let i = 0; i < 10; i++) {
      funcs[i] = () => counter;
      counter++;
  }
  return funcs;
}

let funcs = constfuncs();

for(let i = 0; i < 10; i++) console.log(funcs[i]());
