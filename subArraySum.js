const max = (a, b) => (a > b ? a : b)

const maxSumSubArray = (arr) => {
  let maxSum = 0
  let maxSofar = 0

  for (let i = 0; i < arr.length; i++) {
    maxSofar = max(0, maxSofar + arr[i])
    if (maxSofar > maxSum) {
      maxSum = maxSofar
    }
  }

  return maxSum
}

console.log(maxSumSubArray([-2, -3, 4, -1, -2, 1, 5, -1]))
