const str = "This is a pen."
const upperStr = str.toUpperCase()

console.log(upperStr)
const lowerStr = upperStr.toLowerCase()
console.log(lowerStr)

const sentence = "This is a ball."
console.log(sentence.toLocaleUpperCase().toLowerCase())

// 　メゾットチェーン　質問　//

const info = "This is a car."
console.log(info.slice(1, 4)) //=> his
console.log(info.slice(8, 13)) //=> a car

// ex7-1.js //

const city = 'japan';
console.log(city.toLocaleUpperCase('TR'))

const numbers = [20, 2, 4, 16, 1, 12, 3, 17, 11];
const max = Math.max.apply(null, numbers);
console.log(max);
const min = Math.min.apply(null,numbers);
console.log(min);

function Product (name, price) {
    this.name = name;
    this.price = price;
}
function Food(name,price) {
    Product.call(this, name, price);
    this.category ='food';
}
console.log(new Food('tomato', 4).name);
console.log(new Food('tomato', 4).price);

// ex7-2.js //

let vegetables = ['キャベツ', 'かぶ', '大根', 'にんじん']
console.log(vegetables)
// ["キャベツ", "かぶ", "大根", "にんじん"]
let pos = 1
let n = 2
let removedItems = vegetables.splice(pos, n)
// 複数の要素を削除するには、 n で削除する要素数を定義します
// 指定位置（pos）以降から n 個分の要素が削除されます
console.log(vegetables)
// ["Cabbage", "Carrot"] (元の配列が変化)
console.log(removedItems)
// ["Turnip", "Radish"]

let fruits = ['りんご', 'バナナ', '柿', '桃'];
console.log(fruits[fruits.length - 2]);

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1
// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 7);
console.log(result);
