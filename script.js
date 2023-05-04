function add(){
  const firstNumber = parseFloat(prompt("Enter the first number: "))
  const secondNumber = parseFloat(prompt("Enter the second number: "))
  const result = firstNumber + secondNumber
  alert("The result is " + result)
}

function subtract(){
  const firstNumber = parseFloat(prompt("Enter the first number: "))
  const secondNumber = parseFloat(prompt("Enter the second number: "))
  const result = firstNumber - secondNumber
  alert("The result is " + result)
}

function multiply(){
  const firstNumber = parseFloat(prompt("Enter the first number: "))
  const secondNumber = parseFloat(prompt("Enter the second number: "))
  const result = firstNumber * secondNumber
  alert("The result is " + result)
}

function divide(){
  const firstNumber = parseFloat(prompt("Enter the first number: "))
  const secondNumber = parseFloat(prompt("Enter the second number: "))
  const result = firstNumber / secondNumber
  alert("The result is " + result)
}

function simpleInterest(){
  const principal = parseFloat(prompt("Enter the principal ($): "))
  const interestRate = parseFloat(prompt("Enter the interest rate (%): "))
  const years = parseFloat(prompt("Enter the investment duration (years): "))
  const result = (principal * interestRate * years) / 100
  alert("The total interest is " + result)
}

function compoundInterest(){
  const principal = parseFloat(prompt("Enter the principal ($): "))
  const interestRate = parseFloat(prompt("Enter the interest rate (%): ") / 100)
  const years = parseFloat(prompt("Enter the investment duration (years): "))
  const compound = parseFloat(prompt("Enter the number of times the interest is compounded per year: "))
  const amount = principal * Math.pow(1 + (interestRate/compound),compound * years)
  const result = amount - principal
  alert("The total interest is " + result.toFixed(2))
}

