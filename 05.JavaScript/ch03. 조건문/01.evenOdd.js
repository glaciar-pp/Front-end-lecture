// 기본적인 형태의 조건문
const num = Math.ceil(Math.random() * 10); //const num 이 자바스크립트임을 알수 있는 부분

if (num % 2 == 0) {
    console.log(`${num}은 짝수입니다.`)
}
if (num % 2 == 1) {
    console.log(`${num}은 홀수입니다.`)
}