let arrFirst = ['1','2','3','4','5','6','7','8']
let arrSecond = ['7','8','22','11','4','6','99']
let temp = []

  for (let i = 0; i < arrFirst.length; i++) {
    for (let j = 0; j <= arrSecond.length; j++) {
      if (arrFirst[i] == arrSecond[j]){
        temp.push(arrFirst[i]);
      }
  }
}
console.log(temp)