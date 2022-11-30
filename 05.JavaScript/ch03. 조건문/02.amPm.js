const date = new Date();

console.log(date.getFullYear());    //년도
console.log(date.getMonth() + 1);   //월, 1 적게 나와서 +1 필요
console.log(date.getDay());         //요일
console.log(date.getDate());        //날짜
console.log(date.getHours());       //시
console.log(date.getMinutes());     //분
console.log(date.getSeconds());     //초

const hour = date.getHours();
if (hour < 12)
    console.log(`${date.toLocaleString()} 은/는 오전입니다.`);
else
    console.log(`${date.toLocaleString()} 은/는 오후입니다.`);

const amPm = (hour < 12) ? '오전' : '오후'; //자바와 달리 타입 지정이 필요하지 않아 편리
console.log(`${date.toLocaleString()} 은/는 ${amPm}입니다.`);   //if문만 고집하지 않고 삼항연산자 활용하기
//구분되어야 하는것만 적어두고 공통되는 부분은 싹 합쳐주면 깔끔!