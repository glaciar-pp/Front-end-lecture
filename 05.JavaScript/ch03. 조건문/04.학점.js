const score = Math.ceil(Math.random() * 50 + 50);   //51 ~ 100
let grade;

// 90~100 - A, 80~89 - B, ..., 60미만 - F
if (score >= 90 && score <= 100)
    grade = 'A';
else if (score >= 80)  //어차피 위에서 90점 조건이 있으니 80점 이상만 기재
    grade = 'B';
else if (score >= 70)  
    grade = 'C';
else if (score >= 60)  
    grade = 'D';
else
    grade = 'F';

console.log(`score: ${score}, grade: ${grade}`);

switch(parseInt(score / 10)) {
    case 10:
    case 9:
    grade = 'A'; break;
    case 8:
    grade = 'B'; break;
    case 7:
    grade = 'C'; break;
    case 6:
    grade = 'D'; break;
    default:
    grade = 'F';
}
console.log(`score: ${score}, grade: ${grade}`);