function getElementTextById(Id){
    const element = document.getElementById(Id);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText)
}

const allButton = document.getElementsByClassName('btn')
let total = 8;
let count = 0;
for(const button of allButton){
    button.addEventListener('click', function(){
        count = count + 1
        if(count<=4){
            document.getElementById('seat-count').innerText= count
        }
        total = total -1
        if(total>=4){
            document.getElementById('total-seat').innerText=total
        }
        
        
        
    //  const totalSeat = document.getElementById('total-seat')
    //  const text = totalSeat.innerText;
    // //  const value = parseInt(text)
    //  const updatedValue =text - 1
    //  totalSeat = updatedValue
    // //  document.getElementById('total-seat', updatedValue)

    })
        

}
    