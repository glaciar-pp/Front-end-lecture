let hello = '안녕하세요?';

//속성
console.log(hello.length);      // 6

//Methods
console.log(hello.charAt(0), hello[0]);
console.log(hello.concat('여러분!!!'));     // = hello + '여러분!!!' , concat 이 + 역할

console.log(hello.indexOf('하'));          // 2

//디지털 시계, 00:00 ~ 23:59, 하루동안 3이 표시되는 시간은 몇초인가?
let totalSeconds = 0;
for(let hour=0;  hour < 24; hour++) {
    for (let minute=0; minute < 60; minute++) {
        const display = hour + ":" + minute;
        if (display.indexOf('3') >= 0)      //디지털 시계에 3이 표시되면 이라는뜻
            totalSeconds += 60;
    }
    
}
console.log(totalSeconds);

//정규표현식
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jump over 게으른 개를 The lazy dog.ㅋㅋ';

let newStr = sample.replace(/[A-Z]/, '대'); //자바스크립트는 '[A-Z]', '/[A-Z]/' 작동안됨. 오로지 슬래시
console.log(newStr);
newStr = sample.replace(/o/, 'O');          //이렇게 적으면 딱 처음 하나만 바뀜
console.log(newStr);
newStr = sample.replace(/o/g, 'O');          //뒤에 g(global)을 붙여주면 전체 o를 O로 바꿔줌
console.log(newStr);
console.log(sample.replace(/([A-Z])\w+/g,'XXX')); //정규표현식 사용

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎ ㅏ-ㅣ 가-힣]/g, '');
console.log(newStr);

// 한글과 공백만 남기고 모두 제거하기
newStr = sample.replace(/[^ㄱ-ㅎ ㅏ-ㅣ 가-힣 ]/g, '');
console.log(newStr);

//split
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');
console.log(fruitArray);        //출력됨
const products = '망치, 나사, 못, 톱, 도끼'.split(',');
console.log(products);          //출력됨

fruits = '사과, 배, 감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);        //출력됨

fruits = '사과,  배,감, 포도';  //이상한 상태일 경우?
fruitArray = fruits.split(', ');
console.log(fruitArray);
fruitArray = fruits.split(',').map(s => s.trim());  
/* map = array element 각각에 대해서 callBack 함수 적용
(R, 파이썬 등 많은 언어가 이 방식을 사용할 수 있음. 자바는 없음) */
console.log(fruitArray);

// 문자열의 일부분 추출
const today = new Date().toISOString();
console.log(today); //2022-12-01T06:28:17.445Z 출력됨
console.log(today.substring(0,10));         //날짜 추출, 2022-12-01
console.log(today.substring(11,19));         //시간 추출, 06:32:43

//현재 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수(있는 형식 중에 깔끔한게 없어서 해봄)
function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function datetime(){
    const now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} `+
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`
}
const now = datetime();
console.log(now);       // 2022-12-01 15:48:01
console.log(now.substring(2,16));    // 22-12-01 15:48

//1에서부터 1000까지의 숫자가 있다.
// 0은 몇번, 1은 몇번, ...9는 몇번 사용되는가?
let numbers = '';
for (let i=1; i <= 1000; i++)
    numbers += i;

// split 메소드 활용
let obj = {};
for (let i = 0; i <= 9; i++) {
    obj[String(i)] = numbers.split(String(i)).length - 1;
}
console.log(obj);

//정규표현식 활용
let reArray = [];
for (let i = 0; i <= 9; i++) {
    const re = new RegExp('[^'+ i +']','g');    //객체 생성자로 스트링 들어가도 됨
    reArray.push(numbers.replace(re, '').length);
}
console.log(reArray);


/* 숫자세기 써보던거..크흠
let totalNum = 0;
for (let i=1; i <= 1000; i++){
    const totalNum = i + ',';
    if(num.indexOf('0'), ('1'), ('9')>= 0);
    totalNum = num[i];
}
console.log(totalNum); */