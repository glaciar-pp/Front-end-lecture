// array 의 끝에서 추가가 가능
let array = [1, 2, 3];
console.log(array);

array[array.length] = 100;
console.log(array);         // 추가됨

array.push('fantastic');
console.log(array);         // 추가됨

array[10] = 0;      // array[5] ~ array[9]가 빈채로 10번째에 들어가게됨
console.log(array);

//공약수
const a = 12, b = 24;
let commonDivisors = [];
for (let i=1; i <= ((a < b) ? a : b); i++) { //두번째 조건이 처음에 안되서 a로 했다가 괄호로 우선순위 부여해서 처리함
    if(a % i == 0 && b % i == 0)
        commonDivisors.push(i);
}
console.log(commonDivisors);