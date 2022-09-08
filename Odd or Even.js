function oddOrEven(array) {
  if(array == false || array==[0]) return `even`
  
  res = array.reduce((sum, current)=> { return sum +=current },0)
 console.log(res)

 if( res % 2 == 0) return "even" 
 else return `odd`
 
}