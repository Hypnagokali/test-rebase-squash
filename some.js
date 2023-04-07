const addition = x => y => z => x + y + z;

const newfunc = addition(2);
const newfunc2 = newfunc(3);
const result = newfunc2(5);

console.log(result);