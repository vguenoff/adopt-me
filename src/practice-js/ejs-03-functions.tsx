function roundTo({ n, step }: { n: number; step: number }) {
  const reminder = n % step

  return n - reminder + (reminder < step / 2 ? 0 : step)
}

// Closure
// A function that references bindings from local scopes around it is called a CLOSURE.
function wrapValue(value: number) {
  return () => value
}

const wrap1 = wrapValue(1)
const wrap2 = wrapValue(2)

function multiplier(factor: number) {
  return (n: number) => n * factor
}

const multiplyByTwo = multiplier(2)
const multiplyByThree = multiplier(3)

// Recursion
function power(base: number, expodent: number): number {
  if (expodent === 0) {
    return 1
  } else {
    return base * power(base, expodent - 1)
  }
}

// Dave Gray
function countToTen(n = 1) {
  while (n < 10) {
    console.log(n)
    n++
  }
}

function countToTenRecursive(n = 1) {
  if (n > 10) return
  console.log(n)
  countToTenRecursive(n + 1)
}

// Recursion standard example:
// The Fibonacci Sequence - 0, 1, 1, 2, 3, 5, 8, 13, 21, ..

// By starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

function findSolution(target: number) {
  function find(current: number, history: string): string | null {
    if (current == target) {
      return history
    } else if (current > target) {
      return null
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      )
    }
  }

  return find(1, '1')
}

// ex-1
function min(a: number, b: number) {
  return a < b ? a : b
}

// ex-2
function isEven(n: number) {
  if (n === 0) {
    return true
  } else if (n === 1) {
    return false
  } else {
    if (n > 0) {
      return isEven(n - 2)
    } else {
      return isEven(n + 2)
    }
  }
}

// ex-3
function countChar(s: string, char: string) {
  let count = 0
  s.split('').forEach(c => c.toLowerCase() === char && count++)

  return count
}

function countBs(s: string) {
  return countChar(s, 'b')
}

export default function EJS03Functions() {
  // console.log('roundTo', roundTo({ n: 33, step: 20 }))
  // console.log('wrapValue', wrap1(), wrap2())
  // console.log('multiplier', multiplyByTwo(10), multiplyByThree(10))
  // console.log('power', power(2, 3))
  // console.log('findSolution', findSolution(13)) // → (((1 * 3) + 5) + 5)
  // console.log('countToTen', countToTen())
  // console.log('countToTen', countToTenRecursive())
  console.log('min', min(0, 10))
  console.log('min', min(0, -10))

  console.log('isEven', isEven(50))
  console.log('isEven', isEven(75))
  console.log('isEven', isEven(-1))
  console.log('isEven', isEven(-2))
  console.log(countBs('BOB')) // → 2
  console.log(countChar('kakkerlak', 'k')) // → 4
  return null
}
