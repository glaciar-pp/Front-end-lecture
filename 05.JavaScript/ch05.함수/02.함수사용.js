//완전수 구하기
/*
for (num=2; num <= 10000; num++) {  //num은 변수이름이라 변경해도 아무 상관 없음
    //자기 자신을 제외한 약수 구하기
    let divisors =[];
    for(let i = 1; i < num; i++) {
        if(num % i == 0)
            divisors.push(i);
    }

    //약수의 합 구하기
    let dSum = 0;
    for (let div of divisors)
    dSum += div;

    //약수의 합이 자신과 같은가?
    if (num == dSum) {
        document.write(`${num}: `);
        document.write(divisors.toString());
        document.write('<br>');
    }
}
*/

//화살표 함수 사용 + 완전수 풀이 한번 더 다듬기
// 자바 스크립트 타입으로 작성, 조각조각 쪼개서 풀이(Divide and Conquer)
function getDivisors(num) {         //약수를 배열에 넣는다
    let divisors =[];
    for(let i = 1; i < num; i++) {
        if(num % i == 0)
            divisors.push(i);
    }
    return divisors;
}
// 자바처럼 한줄 정도 쓰는게 아니고 이렇게 화살표 함수 + 여러줄 구조가 많이 나옴
const sumArray = array => {         //약수의 합을 구한다.
    let dSum = 0;
    for (let div of array)
        dSum += div;
    return dSum;
}

for(let num = 2; num <= 10000; num++) {     //완전수를 구한다.
    const array = getDivisors(num);
    const arrSum = sumArray(array);
    if(num == arrSum) 
        console.log(num, ':', array.toString());
    
}