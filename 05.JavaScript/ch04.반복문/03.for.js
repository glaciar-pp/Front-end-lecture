const array = [1, 3, 5, 7, 9];
const obj = {a:1, b:3, x:4, c:3};

for (let item of array)
console.log(item);

for (let key in obj)        //순서가 보장되지 않음 
console.log(key, obj[key]);

array.forEach(x => console.log(x));