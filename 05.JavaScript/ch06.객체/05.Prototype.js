/*
 * Prototype - 옛날 JavaScript 에서 제공하는 방법
 *           - 객체를 찍어내는 틀
 *           - 권장하는 방법은 아님
*/

function Product(name, price) {
    this.name = name;
    this.price = price;
    Product.prototype.print = function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
}

const apple = new Product('사과', 1500);
const grape = new Product('포도', 3000);
const fruits = [apple, grape];

for (let fruit of fruits)
    fruit.print();

/* 한 10년~쯤이면 JavaScript보단 TypeScript가 주력이 되지않을까 하심 
    아무래도 자스의 문제점이 보완되고 했다보니..현재 나온지 얼마되지 않았는데 각광받음 */