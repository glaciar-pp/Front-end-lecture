//배열(array) - List ... 0부터 키값이 있음
let fruits = ['감', '밤', '배']; //구분하지 않아도 되는 같은 계열 데이터, 자바 List 와 비슷함
let personArray = ['제임스', 28, '남자', 175, '프로그래머', 30.0]; 
//값은 알수 있는데 의미(key)가 무엇인지 알수가 없는 점이 있음

//객체(object) - Map
let personInfo = {              //구분이 필요한 데이터, 자바-Map과 비슷함
   'name': '제임스', 'age': 28,'gender': '남자',
   'height': 175, 'job': '프로그래머', 'BMI': 30.0
}
console.log(personInfo); //string 부분 확인

//key 값으로 string인 경우에 ' '생략 가능
//한글 key값도 가능
let maria = {name: '마리아', age: 23, 성별: '여자'}
console.log(maria);

//객체에 대한 접근(access)
console.log(maria['name'], maria['age']); //값이 나오긴 하지만 이런식으로는 사용하지 않는다.

console.log(maria.name, maria.age); 
//자바에서 객체선언하고..생성자 만들고..찍어서 사용하던거랑 비슷함

let key = 'age';
console.log(maria[key]);                //maria.key는 허용되지 않음

const name ='홍길동';
const age = 35;
const gender = '남자';
const hong = {name: name, age: age, gender: gender}
console.log(hong);

//ES-6
//key값과 같은 변수명은 생략가능
const hong2 = {name, age:50, gender};
console.log(hong2);