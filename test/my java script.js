var today = prompt("enter a numbeer value");
var convertedtoday = parseInt(today);

console.log(typeof today);
console.log(typeof convertedToday);

switch (convertedToday) {
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tusday")
        break;
    case 3: 
        console.log("wenesday")
        break;
    case 4: 
        console.log("thursday")
        break;
    case 5:
         console.log("friday")
        break;
    case 6:
         console.log("saturday")
        break;
    default:
        console.log("you have entered an invalid value")
        break;
}