const addition = x => y => z => x + y + z;

const add_2 = addition(2);
const newfunc2 = add_2(3);
const result = newfunc2(5);

console.log(result);