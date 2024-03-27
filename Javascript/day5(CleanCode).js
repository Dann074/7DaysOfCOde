let fruits = []
let frozen = []
let dairy = []
let food = []
let sweets = []
let welcome = ""
let option = ""
let name = ""

do {
  welcome = prompt(`Welcome to your list. What you want to do?
  \n1- Add food
  \n2- Exit
  \nFood:
  \n${food}`)
  switch (welcome) {
    case "1":
      do {
        option = prompt(`What type of food you want to add?
      \n1- Fruit
      \n2- Frozen
      \n3- Dairy
      \n4- Sweets
      \n5- Exit`)
        switch (option) {
          case "1":
            name = prompt(`What's the name of the fruit?`)
            fruits.push(name)
            break
          case "2":
            name = prompt(`What's the name of the frozen?`)
            frozen.push(name)
            break
          case "3":
            name = prompt(`What's the name of the dairy?`)
            dairy.push(name)
            break
          case "4":
            name = prompt(`What's the name of the sweet?`)
            sweets.push(name)
            break
          case "5":
            alert(`Exiting...`)
            break
          default:
            alert(`Invalid entry, please retry`)
        }
        food = [`Fruits: ${fruits}`, `\nFrozens: ${frozen}`, ` \nDairys: ${dairy}`, `\nSweets: ${sweets}`]
      } while (option != "5");
      break;
    case "2":
        alert(`Exiting...`)
        break
    default:
      alert(`Invalid entry...`)
      } 
} while (welcome != 2)
