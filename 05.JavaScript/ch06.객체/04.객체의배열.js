let products = [
    {name: '감', price: 1000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '귤', price: 2000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '밤', price: 3000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '배', price: 5000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '사과', price: 1500, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }}
];

for(let prod of products)
prod.print();