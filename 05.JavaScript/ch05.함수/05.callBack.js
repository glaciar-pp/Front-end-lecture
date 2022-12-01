function callFiveTimes(callback) {  //매개변수 들어감
    for(let i =0; i <5; i++)
    callback();
}

const cb =function() {              //함수
    console.log('함수가 호출되었음');
}
//cb();

//callFiveTimes(cb);  //자바스크립트에서는 많이 사용하는 형태

function cb2() {        //같은 결과 출력됨
    console.log('함수가 호출되었음');
}
//callFiveTimes(cb2);

//callback으로 익명함수를 전달
//익명함수, 함수안에 함수를 호출하면서 그 안의 매개변수를 넣어주는...
callFiveTimes(function() {          
    console.log('함수가 호출되었음');
})

//callback으로 화살표 함수(람다 함수)를 전달
//윗 내용에 람다함수 적용된 형태, 그런 다음 밑에 방식대로 정리하는데, 정리하지 않고
//이런 형태로 올라오는 코드도 있어서 다른 사람들이 한거보면 헷갈릴수도 있음
callFiveTimes(() => {               
    console.log('함수가 호출되었음');
})
//정리
callFiveTimes(() =>  console.log('함수가 호출되었음'));

//이것이 콜백함수!