function pipe(number) {
 for (let i = 1; i < arguments.length; i++) {
    number = arguments[i](number);
  } return number;
}
 function addOne (x) {
  return x + 1; 
}

console.log(pipe(1, addOne, addOne, addOne));
console.log(pipe(1, addOne, addOne, addOne, addOne, addOne)); 