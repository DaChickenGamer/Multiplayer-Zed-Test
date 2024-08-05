const dogeCoinsDisplay = document.getElementById("dogeCoin-display");
let dogeCoins = 0;

const gaindogeCoinsButton = document.getElementById("gain-dogeCoins-button");
const shop = document.getElementById("shop");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays = 7) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/;SameSite=Lax`;
}

window.onload = () => {
  console.log("dogeCoins : " + getCookie("dogeCoins"));

  if (getCookie("dogeCoins")) {
    dogeCoins = parseInt(getCookie("dogeCoins"));
    dogeCoinsDisplay.innerText = "Doge Coins: " + dogeCoins;
  }
};

gaindogeCoinsButton.addEventListener("click", () => {
  dogeCoins += 1;
  setCookie("dogeCoins", dogeCoins);
  dogeCoinsDisplay.innerText = "Doge Coins: " + dogeCoins;
  checkAndCreateButton();
});
