//First Task
// let englishMarks: number = 85;
// let urduMarks: number = 72;

// let average: number = (englishMarks + urduMarks) / 2;

// if (average >= 80) {
//   console.log("Grade: A");
// } else if (average >= 70) {
//   console.log("Grade: B");
// } else if (average >= 60) {
//   console.log("Grade: C");
// } else if (average >= 50) {
//   console.log("Grade: D");
// } else if (average >= 40) {
//   console.log("Grade: E");
// } else {
//   console.log("Grade: F");
// }

//2nd Task
// let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

// console.log("Original Array: " + fruits);

// // Append a string to the end of the array
// fruits.push("fig");
// console.log("After Appending 'fig': " + fruits);

// // Prepend a string to the beginning of the array
// fruits.unshift("apricot");
// console.log("After Prepending 'apricot': " + fruits);

// // Remove a string from a specific index in the array and replace it with another string
// let index: number = 2;
// let replacement: string = "grape";
// fruits.splice(index, 1, replacement);
// console.log("After Replacing 'cherry' with 'grape': " + fruits);


//3rd Task
// function calculateDiscountAmount(productPrice: number, discountPercentage: number): void {
//     if (discountPercentage >= 50) {
//       console.log("Error: Discount percentage is invalid.");
//     } else {
//       let discountAmount: number = productPrice * (discountPercentage / 100);
//       let finalPrice: number = productPrice - discountAmount;
  
//       console.log("Original Price: $" + productPrice);
//       console.log("Discount Percentage: " + discountPercentage + "%");
//       console.log("Discount Amount: $" + discountAmount);
//       console.log("Final Price: $" + finalPrice);
//     }
//   }
  

//4th task
function factorial(num: number): number {
    if (num === 0 || num === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  
    return result;
  }
  let fact = factorial(5)
  console.log(fact)