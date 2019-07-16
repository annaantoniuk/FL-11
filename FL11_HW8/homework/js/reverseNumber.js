function reserveNumber(number) {
  let x = 0;
  
  while (number !== 0 ) {
    x = x * 10;
    x = x + number % 10;
    number = number - number % 10;
    number = number / 10;
  }
  return x;
}

console.log(reserveNumber(-1758410600)); 
