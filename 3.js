const no = 600851475143;

const max = (a, b) => (a > b) ? a : b;
function isPrime(no) {
  for (let i = 2; i * i <= no; i++) {
    if (no % i == 0) return false;
  }
  return true;
}

let ans = -1;
for (let i = 2; i * i <= no; i++) {
  if (no % i == 0) {
    ans = isPrime(i) ? max(ans, i) : ans;
    ans = isPrime(no/i) ? max(ans, no/i): ans;
  }
}

console.log(ans);

console.log(
    {
        "2": isPrime(2),
        "13": isPrime(13),
        "4": isPrime(4)
    }
)