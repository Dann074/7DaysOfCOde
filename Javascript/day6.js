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
  \n2- Remove food
  \n3- Exit
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
      \n5- Exit
      \n${food}`)
        switch (option) {
          case "1":
            name = prompt(`What's the name of the fruit?\n${fruits}`)
            fruits.push(name)
            break
          case "2":
            name = prompt(`What's the name of the frozen?\n${frozen}`)
            frozen.push(name)
            break
          case "3":
            name = prompt(`What's the name of the dairy?\n${dairy}`)
            dairy.push(name)
            break
          case "4":
            name = prompt(`What's the name of the candy?\n${sweets}`)
            sweets.push(name)
            break
          case "5":
            alert(`Exiting...`)
            break
          default:
            alert(`Invalid entry, please retry`)
        }
        food = [`Fruits: ${fruits}`, `\nFrozens: ${frozen}`, ` \nDairy: ${dairy}`, `\nSweets: ${sweets}`]
      } while (option != "5");
      break;
    case "2":
      do {
        option = prompt(`Which type of food you want to remove?
      \n1- Fruit
      \n2- Frozen
      \n3- Dairy
      \n4- Sweets
      \n5- Exit
      \n${food}`)
        switch (option) {
          case "1":
            name = prompt(`What's the name of the fruit you want to remove?\n${fruits}`)
            item = fruits.indexOf(name)
            fruits.splice(item, 1)
            break
          case "2":
            name = prompt(`What's the name of the frozen you want to remove?\n${frozen}`)
            item = frozen.indexOf(name)
            frozen.splice(item, 1)
            break
          case "3":
            name = prompt(`What's the name of the lacticine you want to remove?\n${lacticines}`)
            item = dairy.indexOf(name)
            dairy.splice(item, 1)
            break
          case "4":
            name = prompt(`What's the name of the sweet you want to remove?\n${sweets}`)
            item = sweets.indexOf(name)
            sweets.splice(item, 1)
            break
          case "5":
            alert(`Exiting...`)
            break
          default:
            alert(`Invalid entry, please retry`)
        }
        food = [`Fruits: ${fruits}`, `\nFrozens: ${frozen}`, ` \nLacticines: ${dairy}`, `\nSweets: ${sweets}`]
      } while (option != "5");
      break;
    case "3":
      alert(`Exiting...`)
      break
    default:
      alert(`Invalid entry...`)
  }
} while (welcome != "3");
