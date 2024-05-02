let i = 1
let _i = 2;

const end = 4e6

let ans = 0;
while(_i <= end){
    console.log(_i)
    if(_i % 2 == 0) ans += _i;
    temp = _i;
    _i += i;
    i = temp;
}
console.log(end, ans)