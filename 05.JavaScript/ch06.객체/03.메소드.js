let obj = {
    //속성(attribute), 영어로 치면 명사나 형용사 같은 느낌
    name: '사과',
    price: 1000,
    //메소드(method), 영어로 치면 동사 같은 느낌
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
};
obj.print();