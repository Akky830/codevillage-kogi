
// ex04-1.js //

function cointoss() {
  const num = Math.random()
  if(num >= 0.5) {
    console.log('表');
  }　else {
    console.log('裏');
  } 
};
for (let i = 0; i < 10; i++) {
  cointoss()
}

// ex04-2.js //

// const scores = Math.random() * 100

function scoreing(score) {
  if(score >= 90) {
    a = "秀"
  }  else if(score >= 60 && score < 90) {
    a = "良"
  }　else if (score >= 30 && score < 60) {
    a = "可"
  } else {
    a = "不可"
  }
  return a
}

console.log(scoreing(100));//=> 秀
console.log(scoreing(60)); //=> 良
console.log(scoreing(13)); //=> 不可

// ex04-3.js //

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoreing(score) {
  if(score >= 90) {
    a = "秀"
  }  else if(score >= 60 && score < 90) {
    a = "良"
  }　else if (score >= 30 && score < 60) {
    a = "可"
  } else {
    a = "不可"
  }
  return a
}
scores.forEach((score) => {
  console.log(score,scoreing(score));
})
