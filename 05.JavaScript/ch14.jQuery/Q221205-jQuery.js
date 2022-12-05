//자바스크립트 연습문제 jQuery 방식으로 수정
//수정 및 단축 가능한 부분과 불필요한 부분이 있긴 함
/* 1번 문제, 거듭제곱 */
function answer1() {
    let num1 = parseInt($('#num1').val());
    let num2 = parseInt($('#num2').val());
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2-num1) < 4) {
        alert("입력 값의 범위를 확인하세요.");
        return;
    }

    let powerArray = [];
    for (let i = num1; i <= num2; i++) {
        powerArray.push(Math.pow(2, i));
    }
    $('#result1').text('결과: '+ powerArray)
                 .css('color', 'blue');
}

/* 2번 문제, 단어 검출 */
function answer2() {    
    let text = $('#text2').val();
    const noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ');
    $('#noPunct').text(noPunct);

    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words)
        if (word == 'the')
            count++;
    
    $('#result2').text(`'the'의 개수는 ${count}개 입니다.`)
                .css('color', 'blue');
}

/* 3번 문제, 가격 내림차순 */
function answer3() {
    let prices = $('#price').val().split(';').map(x => parseInt(x));

    prices.sort((a, b) => b - a);       // prices가 내림차순으로 정렬됨

    $('#result3').text(prices)
    .css('color', 'blue');
}

/* 4번 문제, 분류 */
var cars = [];
function answer4_add() {
    cars.push($('#car').val());
}
function answer4() {
    const manu = cars.map(x => x.split(' ')[0]);
    const model = cars.map(x => x.split(' ').slice(1).join(' '));

    $('#input').text(cars);
    $('#manufacturer').text(manu);
    $('#model').text(model);
}

/* 5번 문제, 디지털 시계 */
function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function myDatetime(date){
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} `+
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

$(document).ready(function() {
    setInterval(() => {
        const now = new Date();
        const currDay = myDatetime(now).substring(0,10);
        const weekday = '일월화수목금토'.split('')[now.getDay()]; 
        const currentDay = `${currDay}(${weekday})`;
        
        const currentTime = myDatetime(now).substring(11);

        $('#date').text(currentDay);
        $('#time').text(currentTime);    

        const mapping = [0, 1, 3, 4, 6, 7];
        $('.number').each(function(index, element) {
            $(this).attr('src', `../../img/digits/${currentTime[mapping[index]]}.svg`)
        });

        /* //시계의 위치에 맞게 이미지가 나오도록 배치됨(colon 자리 제외)
        $('#t1').attr('src', `../../img/digits/${currentTime[0]}.svg`);
        $('#t2').attr('src', `../../img/digits/${currentTime[1]}.svg`);
        $('#t3').attr('src', `../../img/digits/${currentTime[3]}.svg`);
        $('#t4').attr('src', `../../img/digits/${currentTime[4]}.svg`);
        $('#t5').attr('src', `../../img/digits/${currentTime[6]}.svg`);
        $('#t6').attr('src', `../../img/digits/${currentTime[7]}.svg`); */
    }, 1000);
});





/* 프로그래머가 제일 조심하고 경계해야하는건 반복문을 써서 간결하고 생산성이 좋게 만들지 않고
    노다가로 코딩을 해결하려고 하는 것... */
    /* 자바스크립트와 다르게 jQuery는 자식이 부모에게 붙는 느낌으로 보면 됨 */