// 반복횟수가 정해지지 않았을 경우에 사용
//주사위를 던져서 누적합이 30을 초과하면 loop를 그만두기(=누적합 30되기 전까지 계속)

let cumSum = 0;
while (cumSum <= 30) {
    const dice = Math.ceil(Math.random()* 6);
    console.log(dice);
    cumSum += dice;
}
console.log(cumSum, '\n');

cumSum = 0;
 while (true) {
    const dice = Math.ceil(Math.random()* 6);
    console.log(dice);
    cumSum += dice;
    if (cumSum > 30)
        break;
 }
 console.log(cumSum);

 /* !(x and y) -> !x and !y , 드모르간의 법칙...그렇지만 여기선 더 좋은 방법이 있어 쓸 필요 없음*/