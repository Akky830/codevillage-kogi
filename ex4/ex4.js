
// ex04-1.js //

function cointoss() {
  const num = Math.random()
  if(num >=0.5) {
    console.log('表')
  }　else {
    console.log('裏')
  } 
};
for (let i = 0; i < 10; i++) {
  cointoss()
}

// ex04-2.js //

function scoring(score) {
  if(score >= 90) {
    console.log('秀')
  }  else if(score >= 60 && score < 90) {
    console.log('良')
  }　else if (score >= 30 && score < 60) {
    console.log('可')
  } else {
    console.log('不可')
  }
}

console.log(scoring(100)) //=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可

// ex04-3.js //

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
  if(score >= 90) {
    console.log('秀')
  }  else if(score >= 60){
    console.log('良')
  }　else if (score >= 30) {
    console.log('可')
  } else {
    console.log('不可')
  }
}
scores.forEach((score) => {
  console.log(score,scorenig(score))
})
