// ES-5(2009년)에서 추가된 Array Method

let fruits = ['apple', 'banana', 'cherry', 'grape'];

//배열 순환 메소드
fruits.forEach((value) => {
    console.log(value);
});
fruits.forEach((value, index) => {
    console.log(index, value);
});

// object에 대해서는 적용할 수 없음!
/* const obj = {name:'james', eng: 88, math: 78};
obj.forEach((value, key) =>{
    console.log(value, key);
}); */

//배열의 각 요소에 함수를 적용 - map
//fruits를 대문자로
const upperFruits = fruits.map(function(f) {
    return f.toUpperCase();
});
console.log(upperFruits);
console.log(fruits);

// numbers를 제곱수로
const numbers = [1, 3, 5, 7, 9];
const squares = numbers.map(n => n*n)
console.log(squares);

//배열의 요소에 대해서 필터링
//제곱수에서 30보다 큰수 찾기
const thirty = squares.filter(n => n > 30);
console.log(thirty);        //49, 81출력

// fruits에서 이름이 6자 이상인것
console.log(fruits.filter(f => f.length >= 6));   //[ 'banana', 'cherry' ] 출력
