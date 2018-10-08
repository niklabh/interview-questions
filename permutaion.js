
const buffer = []
const permute = (str, n, index, bufferIndex) => {
  if (bufferIndex === n) {
    console.log(buffer.join(''))
    return
  }

  if (index === str.length) {
    return
  }

  for (let i = 0; i < str.length; i++) {
    buffer[bufferIndex] = str[i]

    permute(str, n, index + 1, bufferIndex + 1)
  }
}

permute('abc', 3, 0, 0)
