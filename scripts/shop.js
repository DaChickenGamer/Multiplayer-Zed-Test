let iHateCSSButtonCreated = false;

function checkAndCreateButton() {
  if (dogeCoins >= 10 && !iHateCSSButtonCreated) {
    const iHateCssButton = document.createElement("button");
    iHateCssButton.id = "i-hate-css-button";
    iHateCssButton.innerText = "I hate CSS : 10 Doge Coins";
    iHateCssButton.addEventListener("click", () => {
      if (dogeCoins >= 10) {
        dogeCoins -= 10;
        dogeCoinsDisplay.innerText = "dogeCoins: " + dogeCoins;
        setCookie("dogeCoins", dogeCoins);
        iHateCssButton.remove();
        window.location.href = "ihatecss.html";
      }
    });
    shop.appendChild(iHateCssButton);
    iHateCSSButtonCreated = true;
  }
}
