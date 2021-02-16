
// ex6-1.js //

const add2 = x => n * 100 - 5
const mul2 = x => (n + 3) * 8 + 3

const n = 10
console.log(add2(n)) 
console.log(mul2(n)) 

// ex6-1.js //

const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60,  3, 28, 49,  5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]
    
const sums = items.map((item) => {
    // ここを埋める
    let sum = 0;
  　for (let i = 0; i < item.length; i++) {
    　sum += item[i];
  　}
    return sum;
})
console.log(sums) //=> [424, 313, 291, 379]
