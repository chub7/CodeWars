function reverseWords(str) {
  return reverseWordArr = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  
  
}