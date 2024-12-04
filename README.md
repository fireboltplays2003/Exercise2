# Prime Numbers Finder

## Description

This program finds and prints all prime numbers between 2 and 237 by checking divisibility for each number in the range. A prime number is identified as a number greater than 1 that is not divisible by any number other than 1 and itself.

### Features:
- Iterates through numbers from 2 to 236.
- Checks if a number is divisible by any number smaller than itself.
- Outputs each prime number directly to the console.

### Example:
For the range `2-10`:
- Prime numbers are 2, 3, 5, and 7.
- The program outputs each of these numbers on a new line.

## Programmers

- **Stephanos Khoury**
- **Rula Yosef**

## Code

```javascript
function prime(){
  let count = 0;
  for (let i = 2; i < 237; i++) {
    count = 0;
    for (let k = 2; k < i; k++) {
      if (i % k == 0) {
        count++;
      }
    }
    if (count == 0) {
      console.log(i);
    }
  }
}
prime();

