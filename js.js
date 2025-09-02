function isPrimeNumber(num) {
  //2n-1 until now!

  if (num % 2 === 1 || num === 2) {
    return "it is prime number";
  } else {
    return "it is not prime number";
  }
}

console.log(isPrimeNumber(5));
