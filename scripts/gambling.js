function randomnumber(min, max) {
  return Math.random() * (max - min) + min;
}
function gambling(betAmount) {
  let gambleNumber = randomnumber(0, 100);
  if (gambleNumber == 69) {
    dogeCoins = dogeCoins + betAmount * 2;
  } else {
    print();
  }
  return;
}
