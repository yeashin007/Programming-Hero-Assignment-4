function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }

  const ticketPrice = 120;
  const totalSale = ticketPrice * ticketSale;
  const costPerDay = 500 + 8 * 50;
  const remainOnHand = totalSale - costPerDay;

  return remainOnHand;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  const lowerName = name.toLowerCase();
  const strArr = ["A", "y", "i", "e", "o", "u", "w"];
  const lowerStrArr = [];

  for (let el of strArr) {
    el = el.toLowerCase();
    lowerStrArr.push(el);
  }

  if (lowerStrArr.includes(lowerName[lowerName.length - 1])) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

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

function password(obj) {
  const birthYear = obj.birthYear;
  const lengthOfBirthYear = String(birthYear).length;

  if (!obj.name || !obj.birthYear || !obj.siteName || lengthOfBirthYear != 4) {
    return "invalid";
  }

  const siteName = obj.siteName;
  const firstLetterCapital = siteName[0].toUpperCase() + siteName.substring(1);

  return `${firstLetterCapital}#${obj.name}@${obj.birthYear}`;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = 0;
  for (const el of arr) {
    const netIncome = el >= 3000 ? el - el * 0.2 : el;
    totalIncome += netIncome;
  }

  const savings = totalIncome - livingCost;

  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
