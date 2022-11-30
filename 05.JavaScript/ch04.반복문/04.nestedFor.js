// 1사분면 별모양
for (let i=1; i <= 5; i++) {
    let stars='';
    for (let k=1; k<=i; k++)
        stars += '*';
    console.log(stars)
}

// 4사분면 별모양
for (let i=5; i >= 1; i--) {
    let stars='';
    for (let k=1; k<=i; k++)
        stars += '*';
    console.log(stars);
}

// 2사분면 별모양
for (let i=1; i <= 5; i++) {
    let stars='';
    for (let k=1; k<=5-i; k++)
        stars += ' ';
    for (let k=1; k<=i; k++)
    stars += '*';
    console.log(stars)
}

// 3사분면 별모양
for (let i=5; i >= 1; i--) {
    let stars='';
    for (let k=1; k<=5-i; k++)
        stars += ' ';
    for (let k=1; k<=i; k++)
    stars += '*';
    console.log(stars)
}

/*      i   blank   *   (갯수)
*****   5     0     5  
****    4     1     4  
***     3     2     3
**      2     3     2
*       1     4     1

-> 식을 세우는게 헷갈릴땐 싹 뜯어서 보는 방법이 있음.!
*/