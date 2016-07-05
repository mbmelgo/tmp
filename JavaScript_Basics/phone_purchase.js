const bankAccountBalace = 303.91;
const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;
var totalSpending = 0;

while( buyPhone() < bankAccountBalace ){
  console.log("Your total spending is $" +totalSpending.toFixed(2));
}

function buyPhone(){
  var totalAmountToBePaid = phonePrice;
  totalAmountToBePaid += accessoryPrice;
  totalAmountToBePaid += calculateTax(totalAmountToBePaid);
  if( totalAmountToBePaid + totalSpending > bankAccountBalace ){
    console.log("You can't afford to buy a phone and an accessory");
    return bankAccountBalace + 1;
  }
  totalSpending += totalAmountToBePaid;
  return totalSpending;
}

function calculateTax( totalAmountToBePaid ){
    return totalAmountToBePaid * taxRate;
}
