function sum(num1, num2) {
  return num1 + num2
}
function subtraction(num1, num2) {
  return num1 - num2
}
function multiplication(num1, num2) {
  return num1 * num2
}
function division(num1, num2) {
  return num1 / num2
}

let num1 = ""
let num2 = ""
let welcome = ""

do {
  welcome = prompt(`Welcome to my calculator!\nWhat you want to do?\n1- Sum\n2- Subtraction\n3- Multiplication\n4- Division\n5- Exit`)
  
  if (welcome < 5) {
  num1 = parseFloat(prompt(`What's the first number?`))
  num2 = parseFloat(prompt(`What's the second number?`)) 
  }
  
  switch (welcome) {
    case "1":
      alert(`The result of ${num1} + ${num2} = ${sum(num1, num2)}`)
      break
     case "2":
      alert(`The result of ${num1} - ${num2} = ${subtraction(num1, num2)}`)
      break
     case "3":
      alert(`The result of ${num1} x ${num2} = ${multiplication(num1, num2)}`)
      break
     case "4":
      alert(`The result of ${num1} / ${num2} = ${division(num1, num2)}`)
      break
    case "5":
      alert(`Exiting, see you soon! ;)`)
      break
    default:
      alert(`Invalid entry`)
  }
} while(welcome != 5)
