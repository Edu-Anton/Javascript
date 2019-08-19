/*Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.*/

array = [5, 3, 8, 2, 9]

function minMax(arr){
  var minMax = []
  minMax.push(Math.min(...arr))
  minMax.push(Math.max(...arr))
  return minMax
}
console.log(minMax(array))
