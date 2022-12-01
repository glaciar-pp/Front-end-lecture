/* 문제
3자리 숫자 두개를 곱해서 만든 수 중에서

대칭수(palindrome) 이면서 가장 큰 값은?

그 때의 곱한 수 두개는?

- 일단 풀어보고 내일까지 못풀면 몸풀기 시간에 자바 참고해서 풀어보기.
*/

//팔린드롬 기능 만들기, 숫자로 하면 복잡성때문에 문자로 변환해줌
function isPalindrome(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--)
        reverseStr += str[i];
        return str == reverseStr; //자바와 달리 equals 가 필요하지 않음
}
// console.log(isPalindrome('우영우')); //예시로 확인

//숫자 구하기
let maxPal = 0, maxI = 0, maxK = 0;     //숫자 구함
for(let i=100; i <= 999; i++) {
    for(let k=i; k <= 999; k++) {
        let product = i * k;
        if(isPalindrome(String(product))) { //경우의 수
            if(product > maxPal) {      //최대값 찾기
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }
    }
}

console.log(`${maxI} * ${maxK} = ${maxPal}`);


















/*
//3자리 숫자 두개 곱하기
const pMax = 0;
let pMul = 0;
for(let i=100; i <= 999; i++) {
    for(let k=i; k <= 999; k++) {
       pMul = i * k;
    }
    console.log(pMul);
}

//대칭수 구하기 (여기서부터 썼다지웠다 결국 식을 만들지 못함,,,)
*/