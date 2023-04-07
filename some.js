const addition = x => y => z => x + y + z;

const add_2 = addition(2);
const add_3 = add_2(3);
const result = add_3(5);

console.log(result);