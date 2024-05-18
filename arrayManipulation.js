//task 1

function processArray(numbers) {
  return numbers.map(num => num % 2 === 0) ? num * num : num * 3;
}

//example 
const numbers = [11,12,13,14,15];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);
//output: [33,144,39,196,45]

module.export = {processArray};
