function calculateYears(principal, interest, tax, desired) {
  
    
  for ( i = 0 ; principal < desired ; i++){
     let profitPerYear = principal * interest;
    let taxPerYear = profitPerYear * tax;
  principal += (profitPerYear - taxPerYear )
    console.log(principal)
}
  return i
  
}