//선언적 함수
function 더하기(a, b) {
    return a+b;
}

//변수에다가 익명함수를 붙여줌
const anonySum = function(a, b) { //함수의 이름이 없어서 익명함수라고 부름
    return a+b;
}

console.log(더하기(3, 4));
console.log(anonySum(3, 4));
// 똑같이 7이 나옴

//자바스크립트는 함수이름에 한글을 넣어도 구동에 문제 없음
//자바도 한글 사용이 가능하긴 한데, 잘 안씀

//화살표함수(람다), 자바스크립트에서 많이 사용함!
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4)); 