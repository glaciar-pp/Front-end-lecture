//매개변수의 값이 지정되지 않은 경우의 대처 방법
function print(name, count) {
    // if(!count)                      // false가 되는 경우? -0, 0.0, '', NaN, undefined(ch02.기본 참고)
    //     count = 0;                  // 이건 좋은 방식이 아님
    count = count ? count : 0;         // 삼항연산자 활용!
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 10);
print('감');    // 감이/가 undefined개 있습니다. 출력 -> 감이/가 0개 있습니다. 로 바뀜!

//ECMAScript6, 줄여서 ES6(2015년도)에서부터 사용하기 시작한 방식. 디폴트 매개변수 활용한 매개변수 초기화
function print2(name, count=0) { 
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print2('사과', 10);
print2('감');