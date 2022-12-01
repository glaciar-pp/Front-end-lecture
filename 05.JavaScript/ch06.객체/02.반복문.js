let personInfo = {
    'name': '제임스', 'age': 28,'gender': '남자',
    'height': 175, 'job': '프로그래머', 'BMI': 30.0
}

for(let attr in personInfo)
console.log(attr, ':', personInfo[attr]);

//array에서는 for..of 반복문을 써야하지만, for...in을 사용할 수도 있음.
let fruits = ['감', '귤', '배'];
for(let index in fruits)
console.log(index, fruits[index]);

for(let fruit of fruits)
console.log(fruit);

//배열은 of와 index

/*
* JSON(JavaScript Object Natation)
* 외부와 데이터를 주고받는 경우에 사용됨!
* 사실상의 업계 표준(de facto standard)
* 대부분의 언어가 JSON을 내장으로 지원하는데, 자바는 안되어있어서 따로 받아야함
*/

const externalForm = JSON.stringify(personInfo);
console.log(externalForm);          //string 타입

const internalForm = JSON.parse(externalForm);
console.log(internalForm);          //object 타입

const exfruits = JSON.stringify(fruits);
console.log(exfruits);          

const infruits = JSON.parse(exfruits);
console.log(infruits);          