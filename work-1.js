function a(b) {
  if(typeof(b)=== "number"){
    if(Number.isInteger(b) === true) {
      let result = b+10;
      return result;
    }
  }
}

console.log(a("조자연")); // 문제점이다. 타입이 정해지지 않아 그냥 조자연10이 나와버림
console.log("1"+1); //11이 나와버림

