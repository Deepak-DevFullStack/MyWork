let numbers = [11,22,33,44,55,66]
let even = []
for (var i = 0; i < numbers.length;i++){
  if (numbers[i] % 2 === 0){
    even.push(numbers[i])
  }
}
console.log('Even Array is:',even);


let odd = numbers.filter((ele)=> ele % 2 !== 0 )
console.log('Odd Array is:',odd);