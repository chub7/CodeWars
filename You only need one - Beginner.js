function check(a, x) {
  
  res = a.filter( item => item == x)
 console.log(res)
 if (res == false || res[0] == 0) return false
 if( res )return true
 
}