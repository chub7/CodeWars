const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let res =  mpg * fuelLeft
  if ( res >= distanceToPump) { return true }
  else { return false}
};