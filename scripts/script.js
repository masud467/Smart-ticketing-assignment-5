// document.getElementsByClassName('btn-show').addEventListener('click', function(){
//      this.classList.add('bg-amber-500')
  
// })
// function handleButtonClick(){
//   const element = document.getElementsByClassName('btn-show');
//   element.classList.add('bg-amber-500')
// }

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





