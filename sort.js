const swap = (arr, i, j) => {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

const partition = (arr, low, high) => {
  const pivot = arr[high]
  let i = low - 1 // index of smaller element
  for (let j = low; j < high; j++) {
    // If current element is smaller than or
    // equal to pivot
    if (arr[j] <= pivot) {
      i++

      // swap arr[i] and arr[j]
      swap(arr, i, j)
    }
  }

  // swap arr[i+1] and arr[high] (or pivot)
  swap(arr, i + 1, high)

  return i + 1
}

/* The main function that implements QuickSort()
  arr[] --> Array to be sorted,
  low  --> Starting index,
  high  --> Ending index */
const quickSort = (arr, low, high) => {
  if (low < high) {
    /* pi is partitioning index, arr[pi] is
      now at right place */
    const pi = partition(arr, low, high)

    // Recursively sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)
  }
}

const arr = [10, 7, 8, 9, 1, 5]
quickSort(arr, 0, arr.length - 1)
console.log(arr)
