//시간
/* console.log(new Date().toUTCString());
console.log(new Date().toLocaleString());
 */

//숫자세기
let s = '121456131';/* 
let sArray = s.split('1');
console.log(sArray);
console.log(sArray.length - 1); */

console.log(s.replace(/[^1]/g, '')); //정규표현식으로 1만 남기고 없애는 법
console.log(s.replace(/[^1]/g, '').length); 

//숫자를 일일이 넣기 번거로우니 변수 생성
let one = '1';
console.log(s.replace('/[^'+one+']/g', ''));    //작동되지 않음

//정규표현식을 활용하여 작성
let re = new RegExp('[^'+one+']','g');
console.log(s.replace(re, ''));    //작동됨
console.log(re);    //작동됨
