function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isPrimeNumber(5));
