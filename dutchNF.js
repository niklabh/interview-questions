
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const dutch = (arr, i) => {
  let low = -1
  let mid = -1
  let high = arr.length
  const pivot = arr[i]

  while (mid + 1 < high) {
    if (arr[mid + 1] === pivot) {
      mid++
    }

    if (arr[mid + 1] > pivot) {
      swap(arr, mid + 1, high - 1)
      high--
    }

    if (arr[mid + 1] < pivot) {
      swap(arr, mid + 1, low + 1)
      mid++
      low++
    }
  }

  return arr
}

console.log(dutch([4,5,2,5,2,7,8,9,6,4,3,2], 2))
