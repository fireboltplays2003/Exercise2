// Programmers Names: Stephanos Khoury , Rula yosef
// The program/function finds and prints all prime numbers between 2 and 237 by checking divisibility for each number.
function prime(){
  let count = 0;
for (let i = 2; i < 237; i++) {
  // Incrementing i for each number to check
  count = 0;
  for (let k = 2; k < i; k++) {
    // Checking divisibility for values k from 2 to i-1
    if (i % k == 0) {
      count++; // Incrementing count if k is a divisor of i
    }
  }
  if (count == 0) {
    console.log(i); // i is a prime number if count is 0
  }
}
}
prime();

