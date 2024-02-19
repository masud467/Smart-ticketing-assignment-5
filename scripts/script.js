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


function play(){
    hideElementById('home-section')
    showElementById('final-section')
}


function continueBtn(){
    hideElementById('final-section')
    showElementById('home-section')
}


