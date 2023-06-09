let display = document.getElementById('display');
let popup = document.getElementById('popup');
let equalCount = 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  const result = eval(display.value);
  display.value = result;
  equalCount++;

  if (equalCount === 3) {
    popup.style.display = 'block';
    equalCount = 0;
  }
}

function openPopup() {
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}
