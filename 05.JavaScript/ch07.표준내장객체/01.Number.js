//기본 자료형- primitive type
let number = 273.1;
let number2 = Number('273.1');

console.log(number === number2);        //위 두가지 방법이 동일함

//객체 자료형- Wrapper class
let numObj = new Number(273.1);
console.log(number == numObj);          //값은 같다고 나옴
console.log(number === numObj);         //Number, Object 라서 false

let str = '과자|1500';
console.log(str.split('|'));

let strObj = new String('과자|1500');
console.log(strObj.split('|'));

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());        //지수형태 표현(3.141592653589793e+0에서 e는 )
console.log(pi.toFixed(5));             //소숫점 이하 자리 표시갯수
console.log(pi.toPrecision(3));         //유효숫자 자리수

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
// 1.7976931348623157e+308 / 5e-324 나옴
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
// 9007199254740991 / -9007199254740991 나옴
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
// -Infinity / Infinity 나옴
console.log(Math.pow(2, 53) - 1);
//9007199254740991 나옴, 즉, 2의 53승까지가 안전표현범위. Number.MAX_SAFE_INTEGER와 동일