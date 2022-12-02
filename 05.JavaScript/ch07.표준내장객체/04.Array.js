let cars = ['Audi', 'Benz', 'BMW', 'Volvo'];
console.log(cars);

// .pop
let car = cars.pop(); //  .pop 은 배열의 마지막 요소를 꺼내고, 배열에서 꺼낸 요소를 제거함!
console.log(cars, car);

// .push
cars.push('Hyundai');
console.log(cars);

// Array를 생성
let persons = new Array('James', 'Maria');      //배열도 객체이므로 생성자를 통해 생성 가능
console.log(persons);

//Array 속성
console.log(cars.length, persons.length);       //자바 스크립트는 .length 가 속성으로 공통 처리 되어있어서 좋음..

// Array 정렬(.sort)
//오름차순
console.log('정렬 전', cars);
cars.sort();
console.log('정렬 후', cars);
//내림차순
cars.reverse();
console.log('내림차순', cars);

// Array join (분해(split)해서 원하지 않는 부분을 뺀뒤 다시 합칠 수 있음) 
console.log(cars.join(', '));       
//Hyundai, Benz, BMW, Audi 나옴. 자신 파괴는 아니고 내용 그대로 String으로 변화

//문자열을 거꾸로 만들수 있음
let sample = '기러기 토마토 우영우';
/* let arr = sample.split('');      //글자단위의 Array 생성
 console.log(arr);
arr.reverse();                  //배열이 뒤집어짐
console.log(arr);              
console.log(arr.join('')); */
const reverseStr = sample.split('').reverse().join('');
console.log(reverseStr); 
const rs = str => str.split('').reverse().join('');    //글자를 뒤집어주는 함수      
console.log(rs('안녕하세요?')); 

// Array의 일부분을 반환
let fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1, 3));            //앞숫자 포함, 뒷숫자 -1
console.log(fruits.slice(2));               //index 2부터 끝까지

// Array의 일부분 삭제해서 리턴
const res = fruits.splice(0,2);
console.log(res);
console.log(fruits);

//객체의 배열을 정렬
let students = [
    {name:'james', eng: 88, math: 78},
    {name:'maria', eng: 78, math: 98},
    {name:'brian', eng: 81, math: 79},
    {name:'tommy', eng: 68, math: 76}
];
//영어의 오름차순, 자기파괴적
/* let engAsc = students.sort(function(a, b) {
    return a.eng - b.eng;
});
console.log(engAsc);  / 이 과정으로 인해 배열이 변하게 된다. */

//수학의 내림차순
/* students.sort((a, b) => b.math - a.math);
console.log(students); */

//이름의 오름차순
students.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return  1;
    return 0;
});
//students.sort((a, b) => a.name - b.name);   //위 다른 항목과 다르게 이 방식은 성립되지 않음.
console.log(students);


/* Stopwords(불용어) 
데이터를 다루는데에 크게 중요하지 않은 단어들.
예로 It, is, the, an, I, my...등
*/