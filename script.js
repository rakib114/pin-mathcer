//Random Pin Collecting
function getPin() {
  const randomNumber = Math.random() * 10000;
  const pinNumber = (randomNumber + "").split(".")[0];
  if (pinNumber.length === 4) {
    return pinNumber;
  } else {
    return getPin();
  }
}
//Display Generate Pin
function pinGenerate() {
  const pinInput = document.getElementById("pin-number");
  pinInput.value = getPin();
}
//Handle calculator buttons event
const buttonsContainer = document.getElementById("digits-container");
buttonsContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    //handle backspace
    //handle clear
    if (digit === "C") {
      const typedInput = document.getElementById("typed-pin");
      typedInput.value = "";
    }
  } else {
    const typedInput = document.getElementById("typed-pin");
    typedInput.value = typedInput.value + digit;
  }
});
//verifing pin
function verifyPin() {
  const pin = document.getElementById("pin-number").value;
  const typedPin = document.getElementById("typed-pin").value;
  if (pin === typedPin) {
    displayMatchResult("block", "none");
  } else {
    displayMatchResult("none", "block");
  }
}
function displayMatchResult(correctStatus, incorrectStatus) {
  const correct = document.getElementById("correct-pin");
  correct.style.display = correctStatus;
  const incorrect = document.getElementById("incorrect-pin");
  incorrect.style.display = incorrectStatus;
}
