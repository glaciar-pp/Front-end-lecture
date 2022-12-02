// error.error.error();    // ReferenceError: error is not defined

try {
    error.error.error();
} catch(e) {
    console.log(e.name);        // ReferenceError
    console.log(e.message);     // error is not defined
}

//우리가 배우는 기준상 예외처리를 깊게 들어가지 않았고, 자바와 내용이 거의 동일함!