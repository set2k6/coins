/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter(change) {
// Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  change = change*100;

  change = change.toFixed();
  console.log("change", change);

  var remainderQuarters = change % 25;
  coinPurse.quarters = (change - remainderQuarters) /25;
  var minusQuarters = change - (coinPurse.quarters *25);

  var remainderDimes = minusQuarters % 10;
  coinPurse.dimes = (minusQuarters - remainderDimes) /10;
  var minusDimes = minusQuarters - (coinPurse.dimes * 10);

  var remainderNickels = minusDimes % 5;
  coinPurse.nickels = (minusDimes - remainderNickels) /5;
  var minusNickels = minusDimes - (coinPurse.nickels * 5);

  coinPurse.pennies = minusNickels;

  wallet.innerHTML += "<div>" + "Quarters: " + coinPurse.quarters + "</div>";
  wallet.innerHTML += "<div>" + "Dimes: " + coinPurse.dimes + "</div>";
  wallet.innerHTML += "<div>" + "Nickels: " + coinPurse.nickels + "</div>";
  wallet.innerHTML += "<div>" + "Pennies: " + coinPurse.pennies + "</div>";

  return coinPurse;
}

var wallet = document.getElementById("wallet");
var coinInput = prompt("Convert your dollars to coins!");
var coinInput2 = (parseFloat(coinInput));
coinCounter(coinInput2);

// var coins = coinCounter()
// console.log();
