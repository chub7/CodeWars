function printerError(s) {
  size = s.match(/[a-m]/gi).length
console.log(size)
byff = s.length - size
return `${byff}/${s.length}`
}