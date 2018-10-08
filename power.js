
const pow = (a, b) => {
  if (b === 1) {
    return a
  }

  return a * pow(a, b - 1)
}

console.log(pow(2, parseInt(process.argv[2] || 0)))
