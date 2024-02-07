// function calculateMoney(ticketSale) {
//   if (ticketSale < 0) {
//     return "Invalid Number";
//   }

//   const ticketPrice = 120;
//   const totalSale = ticketPrice * ticketSale;
//   const costPerDay = 500 + 8 * 50;
//   const remainOnHand = totalSale - costPerDay;

//   return remainOnHand;
// }

// console.log(calculateMoney(-130));

/* 2nd */

// function checkName(name) {
//   if (typeof name !== "string") {
//     return "invalid";
//   }

//   const lowerName = name.toLowerCase();
//   const strArr = ["A", "y", "i", "e", "o", "u", "w"];
//   const lowerStrArr = [];

//   for (let el of strArr) {
//     el = el.toLowerCase();
//     lowerStrArr.push(el);
//   }

//   if (lowerStrArr.includes(lowerName[lowerName.length - 1])) {
//     return "Good Name";
//   } else {
//     return "Bad Name";
//   }
// }

// console.log(checkName(["Rashed"]));

/** Problem: 03 */
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  const numberArray = [];

  for (const el of array) {
    if (typeof el === "number" && !isNaN(el)) {
      numberArray.push(el);
    }
  }

  return numberArray;
}

console.log(deleteInvalids({ num: [1, 2, 3] }));
