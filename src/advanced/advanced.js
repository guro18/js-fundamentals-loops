const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    indexOfTen = i
    break
  }
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount++
  }
}

// 3. use a for loop to find the average of the numbers in the array
let average = 0
let sum = 0
for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
}
average = sum / nums.length

// 4. use a for loop to find the largest number in the array
let largest = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i]
  }
}

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < smallest) {
    smallest = nums[i]
  }
}

// 6. find the median of the numbers in the array
let median = 0

nums.sort((a, b) => a - b)

if (nums.length % 2 === 0) {
  // If the array has an even length, take the smaller of the two middle elements
  median = nums[nums.length / 2 - 1]
} else {
  // If the array has an odd length, take the middle element
  median = nums[Math.floor(nums.length / 2)]
}

console.log(nums)

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
