const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (i = 0; i < employees.length; i++) {
  console.table(employeeBonusInfo(employees[i]));
} //start employeeBonusInfo

function employeeBonusInfo(oneEmployee) {
  let nameValue = oneEmployee.name;
  let bonusPercentageValue = calculateBonusPercentage(
    oneEmployee.reviewRating,
    oneEmployee.annualSalary,
    oneEmployee.employeeNumber
  );
  let totalBonusValue = calculateTotalBonus(
    bonusPercentageValue,
    oneEmployee.annualSalary
  );
  let totalCompensationValue = calculateTotalCompensation();

  const oneEmployeeReturned = [
    {
      name: nameValue,
      bonusPercentage: bonusPercentageValue,
      totalBonus: totalBonusValue,
      totalCompensation: totalCompensationValue,
    },
  ];

  return oneEmployeeReturned;
}
// end employeeBonusInfo

function calculateBonusPercentage(reviewRating, annualSalary, employeeNumber) {
  let bonusPercentage = 0;
  if (reviewRating <= 2) {
    bonusPercentage += 0;
  } else if (reviewRating === 3) {
    bonusPercentage += 0.04;
  } else if (reviewRating === 4) {
    bonusPercentage += 0.06;
  } else if (reviewRating === 5) {
    bonusPercentage += 0.1;
  }

  if (employeeNumber <= 9999) {
    bonusPercentage += 0.05;
  }

  if (annualSalary > 65000) {
    bonusPercentage -= 0.01;
  }

  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  return bonusPercentage;
} //end calculateBonusPercentage

function calculateTotalBonus(bonusPercentage, annualSalary) {
  let totalBonus = bonusPercentage + 1;
  totalBonus *= annualSalary;
  Math.round(totalBonus);
  return totalBonus;
} //end calculateTotalBonus

function calculateTotalCompensation() {
  return calculateTotalCompensation;
} //end calculateTotalCompensation
