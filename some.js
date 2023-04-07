const somefunc = x => y => z => x + y + z;

const newfunc = somefunc(2);
const newfunc2 = newfunc(3);
const result = newfunc2(5);

console.log(result);