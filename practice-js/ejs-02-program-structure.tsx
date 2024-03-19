// ex-1
// function loopingATriangleBookSolution() {
//   for (let line = '#'; line.length < 8; line += '#') console.log(line)
// }

// function loopingATriangle() {
//   for (let i = 0; i < 7; i += 1) {
//     console.log('#'.repeat(i + 1))
//   }
// }

// ex-2
// function fizzBuzzBookSolution() {
//   for (let n = 0; n <= 100; n++) {
//     let output = ''

//     if (n % 3 === 0) output += 'Fizz'
//     if (n % 5 === 0) output += 'Buzz'

//     console.log(output || n)
//   }
// }

// function fizzBuzz() {
//   let i = 0

//   while (i < 100) {
//     i += 1
//     let output: string | number = i

//     if (i % 3 === 0) {
//       output = 'Fizz'

//       if (i % 5 === 0) output += 'Buzz'
//     } else if (i % 5 === 0) output = 'Buzz'

//     console.log(output)
//   }
// }

// ex-3
function chessboard(n: number) {
  const isEven = (n: number) => n % 2 === 0

  let output = ''

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      output += isEven(j + i) ? ' ' : '#'
    }

    output += '\n'
  }

  return output
}

export default function EJS02ProgramStructure() {
  // console.log(loopingATriangle())
  // console.log(loopingATriangleBookSolution())
  // console.log(fizzBuzz())
  // console.log(fizzBuzzBookSolution())
  console.log(chessboard(8))

  return null
}
