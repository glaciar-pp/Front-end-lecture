// 출력 메소드
console.log("Hello", "world", "!!!");

// 상수, 변수
const hello = "안녕하세요?";    //상수
var x = 3;                     //변수, 2015년 이전
let y = 4;                     //현 시점에서는 var 대신에 let을 사용할 것!
//a = 20;                        //일단 구현이 되긴 하지만..언어의 근본과는 먼 방식이라 사용 금지

// 기본 자료형
// 1. 숫자(number)
console.log(typeof(1), typeof(3.14)); //정수, 실수 구분 안함 같은 숫자로 나옴
console.log(2**10);     //2의 10제곱을 의미, 1024 나옴

// 2. 문자열(string)
console.log(typeof('hello'), typeof("world")); //문자도 타입 따로 없음

console.log(hello[0], hello[5]);
//자바였으면 hello.charAt(0) / hello.subString(0,1) 사용해야함

console.log(`${hello} 3 + 4 = ${x + y}`);      //template literal

console.log(`올해는 ${new Date().getFullYear()}년 입니다.`);
//자바였으면 "올해는 " + new Date().getFullYear() "년 입니다." 로 여러번 나눠줘야함...

// 3. 불(boolean)
console.log(typeof(true), typeof(false));
console.log(true < 10);         //true가 1로 변환되어 연산을 수행하기 때문에 true가 나옴

// 4. 함수(function)
console.log(typeof function() {});
console.log(typeof(() => {}));      
//자바스크립트에서는 화살표 함수라고 함, 자바에서의 람다 함수 () -> {}

//5. 객체(object)
let obj = {'x':3, 'y':4};       // {'x': x, 'y':y} 는 콜론 뒤 값 생략 가능...{x, y}로 기재 가능하다는 뜻
console.log(typeof obj);
console.log(obj.x, obj.y);
//console.log(typeof {'x':3, 'y':4});     //자바에서는 Map 형태라고 볼수 있음. 파이썬 같은 경우는 dictionary

// 6. undefined
let alpha;                      // 값 안넣고 변수만 선언함
console.log(typeof(alpha));     // undefined 출력됨


//증감 연산자
console.log(x++);        //3이 출력되고, x의 값이 4가 된다
console.log(++x);      //5가 출력되고, x의 값이 5가 된다

//강제 자료형 변환
    //두줄의 강제 자료형 변환만 false, 나머지는 true
console.log(Number('101'), String('101'), Number(true), Number(false))
console.log(Boolean(0), Boolean(undefined), Boolean(''), Boolean(0.0), Boolean(null), Boolean(NaN));

    //true 나오는지 확인
console.log(Boolean(0.1), Boolean(' '), Boolean(100));

console.log(Number('string'));                                       // NaN, Not a Number
console.log(Number('0o123'), Number('0x123'), Number('0b101'));     //8진수, 16진수, 2진수

//자동 자료형 변환
console.log(52+'37', 21 + 31 + '37'); //5237 5237 나옴
console.log(52+'37', '37' + 21 + 31); //5237 372131 나옴
console.log(1 + true, true + 'bool'); //2 truebool 나옴
//-> 문자열로 변함! string concatenation

console.log(52 - "37",  '37' - 21.5, '37' * 2); 
//-> 문자열이 숫자로 바뀌어 계산됨

// 일치 연산자 - 자료형까지 계산
console.log(1 == 1.0, 1 === 1.0);     //정수 실수 구분없이 둘다 숫자형이라 true가 나옴, 일치!
console.log(1 == '1', 1 === '1', 1 == true, 1 === true); // 값은 같으나 자료형이 다름
//우선순위 걱정하느라 머리싸매지말고 ()처리를 통해 깔끔하게 계산하자!

//상수
const today = new Date; //const 정말 자주 사용함! 그리고 한번 값 주면 변하지 않음
console.log(today);
today = " ";            //상수인데 변경하려고 했기 때문에 run time error 발생



/* cmd 에서 빠져나올땐 ctrl+c and ctrl+c 또는 ctrl+d 누르기 
    자바와 자바스크립트가 비슷한 곳이 많은 이유는 C언어에서 출발했다보니 그렇다.
    연산자도 거의 동일하다. 
*/