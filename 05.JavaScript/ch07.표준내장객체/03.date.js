// Date 객체 생성 방법
// 1. 현재 날짜/시간
let today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleString());    //timezone 반영되었음

// 2. Unix time 기준(1970.1.1 이후 ms 단위로)..숫자가 엄청 클듯
let someDay = new Date(1.67e12);        //2022-12-02T16:53:20.000Z 나옴!
console.log(someDay);                   

// 3. 문자열 기반
let strDate = new Date("December, 1, 2022 17:05:00");
console.log(strDate.toLocaleString());      //.toLocaleString() 안붙여주면 자꾸 국제표준시가 나옴

// 4. 시간 요소(연, 월-1, 일, 시, 분, 초)
let timeDate = new Date(2022, 11, 1, 17, 6, 0);
console.log(timeDate.toLocaleString()); 

//매개변수로 받은 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수(있는 형식 중에 깔끔한게 없어서 해봄)
function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function myDatetime(date){
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} `+
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}
console.log(myDatetime(strDate));   //2022-12-01 17:05:00 나옴
console.log(myDatetime(timeDate));   //2022-12-01 17:06:00 나옴

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myDatetime(today));     // 2023-03-11 17:17:28 나옴

// 오늘 : 1년 11개월 8일 후
let date = new Date();
date.setFullYear(date.getFullYear()+ 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 8);
console.log(date);      // 2024-11-09T08:21:05.214Z 나옴

// 시간간격
let now = new Date();
console.log(now.getTime());

const christmas = new Date(2022, 11, 25);
console.log(myDatetime(christmas));

const diffs = christmas.getTime() - now.getTime();  // christmas 와 오늘 사이의 밀리초
const diffDay = Math.ceil(diffs / (24 * 60 * 60 * 1000));
console.log(diffDay);
