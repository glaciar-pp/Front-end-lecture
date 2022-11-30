//지뢰 찾기
let N = 8;  //row, column 둘다 8
let mines = [];

//Step 1. 초기 지뢰밭 만들기
//random 값 > 0.7 - 지뢰 (*) 나머지값 - 평지(.)
for (let i=0; i<N; i++) {
    let row = '';
    for (let k=0; k<N; k++) {
        if (Math.random() > 0.7)
            row +=  '*';
        else
            row += '.';
    }
    mines.push(row);
}

/* for (let i=0; i<N; i++){
    for(let k=0; k<mines[i].length; k++) {
        process.stdout.write(' ');
        process.stdout.write(mines[i][k]);

    }
    console.log();
} */
printArray(mines);

function printArray(array) {    //상단 출력 개선버전
    for (let i=0; i < array.length; i++) {
        for(let k=0; k < array[i].length; k++) {
            process.stdout.write(' ');
            process.stdout.write(array[i][k]);
        }
        console.log();
    }
}

// step 2.Step 1에서 구한 mines에 padding을 더해서 padMines를 만들고 출력한다.(둘레가 잘린 칸을 위해)
let padMines = [];
let padLine = '';
for (let i=0; i < N+2; i++) 
    padLine += '.';
        
padMines.push(padLine);
for (let i=0; i < N; i++) {
    let row ='.' + mines[i] + '.';
    padMines.push(row);
}
padMines.push(padLine);
// printArray(padMines); 보기 불편해서 주석처리
console.log();

// Step 3. Final mines를 구한다.
let finalMines =[];
for (let i = 1; i < N+2-1; i++) {  //array에 대한 loop
//N+2-1 인 이유는 위에서 패딩역할로 2를 추가했었는데, 그 둘레를 이젠 쓰지 않기 때문에 -1 해주는 것이다.
    let row='';
    for (let k=1; k < N+1; k++) {
        if (padMines[i][k] == '*')
            row += '*';
        else {
            const count = //이 값이 true면 1, false면 0
                (padMines[i-1][k-1]=='*') + (padMines[i-1][k]=='*') + (padMines[i-1][k+1]=='*') +
                (padMines[i][k-1]=='*') +    /*       내 위치    */   (padMines[i][k+1]=='*') +
                (padMines[i+1][k-1]=='*') + (padMines[i+1][k]=='*') + (padMines[i+1][k+1]=='*')
            row += count;
        }
    }
    finalMines.push(row);
}
printArray(finalMines);


//AnyPang, 배열과 반복문을 연습하기에 좋은방식. 더 이상 움직임이 없어질때까지 시뮬레이션!
let anyPang = [];
for (i=0; i < N; i++) {
    let row='';
    for(k=0; k < N; k++) {
        row += Math.ceil(Math.random() * 6);
    }
    anyPang.push(row);
}
console.log('\n');
printArray(anyPang);


/* 지뢰찾기가 조금 어려운 편이다보니 되려 연습하기에 좋음.. */


/* 여기는 나의 오답파티..
Step 1. 초기 지뢰밭 만들기
 const MF = Math.random()
for ( MK=1; MF < 100; MF++) { 
    if (MF > 0.7)
    console.log('*');
    else
    console.log('.');
} 
// step 2.Step 1에서 구한 mines에 padding을 더해서 padMines를 만들고 출력한다.
padMines(N)

function padMines(N) {
    for (let i=0; i <=10; i++) {
        if(N < 8)
        padding =  N += i <= 10;
    }
    console.log(mines + padding);
}
*/