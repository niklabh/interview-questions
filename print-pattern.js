// You a given a number N. You need to print the pattern for the given value of N.
// for N=2 the pattern will be
// 2 2 1 1
// 2 1
// for N=3 the pattern will be
// 3 3 3 2 2 2 1 1 1
// 3 3 2 2 1 1
// 3 2 1

const print = (n) => {
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= n; j++) {
      for (let k = 0; k < i; k++) {
        process.stdout.write(`${j}`)
      }
    }
    console.log('')
  }
}

print(3)
