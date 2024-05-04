const SIZE = 3;

const HIGH = Math.pow(10, SIZE) - 1;
const LOW = Math.pow(10, SIZE - 1);

const isPalindrome = (no) => String(no) === String(no).reverse();

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

let ans = -1;
for (let i = LOW; i <= HIGH; i++) {
  for (j = i; j <= HIGH; j++) {
    let product = i * j;
    if (isPalindrome(product)) {
      ans = Math.max(ans, product);
    }
  }
}

console.log(ans);
