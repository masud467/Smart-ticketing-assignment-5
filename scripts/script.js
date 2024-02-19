var clickCount = 0;

function handleButtonClick(btn) {
  clickCount++;
  btn.disabled = true;
  
  if (clickCount >= 4) {
    disableAllButtons();
  }
}

function disableAllButtons() {
  var buttons = document.querySelectorAll('.btn-show');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}


