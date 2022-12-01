const a = '123.65', b = '0xff', c = '23';

console.log(Number(a), Number(b));

console.log(parseInt(a), parseFloat(a));
console.log(parseInt(b), parseFloat(b), parseFloat(c)); //16진수 확인 못함.

console.log(parseInt('1401동'), Number('1401동'));  //1401, NaN 
//자료조사 하고 숫자만 빼기 편할듯,,!

console.log(parseInt('1401동503호'))                //1401 나옴, 일반 스트링이 나오면 나오기 전까지만 바꿔줌.!