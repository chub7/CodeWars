function removeSmallest(numbers) {
    let exArr = [...numbers]
    let exArr2 = [...numbers]
    exArr.sort(function(a,b){ return a - b})
     exArr2.splice(exArr2.indexOf(exArr[0]),1)
     return exArr2
   }