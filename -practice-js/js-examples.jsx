// @ts-check
export default function JsExamples() {
  // function tenSquared() {
  //   return 10 * 10
  // }

  // function nineSquared() {
  //   return 9 * 9
  // }

  // console.log(tenSquared(), nineSquared())

  // We can generalize the function to make it reusable
  // function squareNum(num) {
  //   return num * num
  // }

  // console.log('------------\n>', squareNum(123))

  // function copyArrayAndMultiplyItBy2(array) {
  //   const output = []

  //   for (let i = 0; i < array.length; i += 1) {
  //     output.push(array[i] * 2)
  //   }

  //   return output
  // }

  // const myArray = [1, 2, 3]
  // const result = copyArrayAndMultiplyItBy2(myArray)

  /**
   * @param {number} n
   */
  function multiplyByTwo(n) {
    return n * 2
  }

  /**
   * @param {number[]} array
   * @param {(n: number) => number} instructions
   */
  function copyArrayAndManipulate(array, instructions) {
    const output = []

    for (let i = 0; i < array.length; i += 1) {
      output.push(instructions(array[i]))
    }

    return output
  }

  const myArray = [1, 2, 3]
  const result = copyArrayAndManipulate(myArray, multiplyByTwo)

  console.log('------------\n>', result)

  return null
}
