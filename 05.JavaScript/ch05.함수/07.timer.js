const si = setInterval(function() {        //setInterval(함수인데 callBack함수, 주기(ms)가 들어감)
    console.log(new Date());
}, 1000);                       //실행하니 초 단위로 찍어서 보여줌, Ctrl+C로 중지 가능(interrupt)

setTimeout(() => console.log('1초 경과'), 1000);    //정한 시간에 보여줄 것을 정함

/*setInterval과 setTimeout을 같이 실행하면 동기방식은 순서대로 진행되는데,
비동기방식은 시작은 순서대로 하긴 하지만 거의 동시적으로 출력이 된다. 
이러한 사항은 자바스크립트의 특징이다.
*/

//clearInterval, 인터벌 명령 제거
setTimeout(() => clearInterval(si), 5000);  //5초 후에 인터벌 동작을 멈춤

