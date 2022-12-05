function answer1() {
    let num1Node = document.getElementById('num1');
    let num2Node = document.getElementById('num2');
    let num1 = parseInt(num1Node.value);
    let num2 = parseInt(num2Node.value);
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2-num1) < 4) {
        alert("입력 값의 범위를 확인하세요.");
        return;
    }

    let powerArray = [];
    for (let i = num1; i <= num2; i++) {
        powerArray.push(Math.pow(2, i));
    }
    let resNode = document.getElementById('result1');
    resNode.innerHTML = '결과: ' + powerArray;
    resNode.style.color = 'blue';
}

function answer2() {
    let textNode = document.getElementById('text2');
    let text = textNode.value;
    const noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ');
    document.getElementById('noPunct').innerHTML = noPunct;

    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words)
        if (word == 'the')
            count++;
    
    const resNode = document.getElementById('result2');
    resNode.innerHTML = `'the'의 개수는 ${count}개 입니다.`;
    resNode.style.color = 'blue';
}

function answer3() {
    const priceStr = document.getElementById('price').value;
    // let priceStrArr = priceStr.split(';');              // ['51900', '83000', '158000', ...]
    // let prices = priceStrArr.map(x => parseInt(x));     // [51900, 83000, 158000, ...]
    /* let prices = [];
    for (let str of priceStrArr)
        prices.push(parseInt(str)); */
    let prices = priceStr.split(';').map(x => parseInt(x));

    prices.sort((a, b) => b - a);       // prices가 내림차순으로 정렬됨

    const resNode = document.getElementById('result3');
    resNode.innerHTML = prices;
    resNode.style.color = 'blue';
}

var cars = [];
function answer4_add() {
    const carNode = document.getElementById('car');
    cars.push(carNode.value);
}
function answer4() {
    /* const manu = cars.map(x => {
        let y = x.split(' ');
        return y[0];
    }); */
    const manu = cars.map(x => x.split(' ')[0]);
    /* const model = cars.map(x => {
        let y = x.split(' ');
        let m = y.slice(1);
        return m.join(' ');
    }); */
    const model = cars.map(x => x.split(' ').slice(1).join(' '));

    document.getElementById('input').innerHTML = cars;
    document.getElementById('manufacturer').innerHTML = manu;
    document.getElementById('model').innerHTML = model;




}






/* 혼자 1번 작성하던 답안..다른 답안은 반 정도 비슷해서 정답과 합쳤음
    function answer1() {
    let num1Node = Number(document.getElementById('num1').value);
    let num2Node = Number(document.getElementById('num2').value);
    squares.filter(num1 => num1 >= 20 , num2 => 10 <= num2 >= 30, num1 );
}
 */