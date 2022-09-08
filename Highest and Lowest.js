function highAndLow(numbers){
  let str = ``;
  numbers = numbers.split(` `).sort(function(a, b) { return a - b })
return str +=numbers[numbers.length-1]+` `+numbers[0]
  
}