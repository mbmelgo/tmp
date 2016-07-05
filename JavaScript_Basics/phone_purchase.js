const taxRate = 0.08;

var bankAccountBalace = 303.91;
var threshold = 0;

while( 0 < bankAccountBalace ){
  threshold = getThreshold();
  bankAccountBalace -= buyPhone();
  
  console.log("Your total spending is $" +totalSpending.toFixed(2));
}

function buyPhone(){
  var totalAmountToBePaid = 0;
  var phonePrize = Number(alert("Enter phone prize:"));

  while(phonePrize === NaN){
    phonePrize = Number(alert("Invalid Price. Enter phone prize again:"));
  }

  if(checkThreshold()){
    totalAmountToBePaid += phonePrize;
  } else {
    alert("Not enough money to buy phone");
    return 0;
  }

  var buyAccesory = String(alert("You want to buy a phone accessory? (yes/no)"));

  if(buyAccesory.toLowerString().equals("yes")){
    return totalAmountToBePaid += buyAccesory();
  } else {
    return totalAmountToBePaid;
  }

}

function buyAccesory(){
  var acccessoryPrize = Number(alert("Enter acccessory prize:"));

  while(acccessoryPrize === NaN){
    acccessoryPrize = Number(alert("Invalid Price. Enter acccessory prize again:"));
  }

  if(checkThreshold()){
    return acccessoryPrize;
  } else {
    alert("Not enough money to buy accessory");
    return 0;
  }

}

function getThreshold(){
  return bankAccountBalace;
}

function calculateTax(totalAmountToBePaid){
    return totalAmountToBePaid * taxRate;
}

function checkThreshold(totalAmountToBePaid){
  return totalAmountToBePaid <= threshold;
}
