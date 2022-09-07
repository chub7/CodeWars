function accum(s) {
	let arr = s.toUpperCase().split(``)
  console.log(arr)
  
  let newArr = []
  arr.forEach((elem, index) => {
    newArr.push(elem);
  for (let i = 1; i <= index; i++){
   newArr[index] += elem.toLowerCase();
    
}
   
  
})
  
  newStr = newArr.join(`-`);
  console.log(newStr)
  return newStr
}