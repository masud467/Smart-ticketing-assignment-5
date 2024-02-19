function getElementTextById(Id){
    const element = document.getElementById(Id);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText)
}



const allButton = document.getElementsByClassName('btn-show')


let total = 8;
let count = 0;
for(const button of allButton){
    

    button.addEventListener('click', function(){
        const title = button.innerHTML
       

        const buttonShow = document.getElementById('button-show');

        const p = document.createElement('p');
        p.innerText = title
        buttonShow.appendChild(p)

        const classShow = document.getElementById('class-show');
        const text = document.createElement('p')
        text.innerText = 'Economy'
        classShow.appendChild(text)


        const priceShow = document.getElementById('price-show');
        const price = document.createElement('h3')
        price.innerText = '550'
        priceShow.appendChild(price)
        
        
        
        // const buttonShow = document.getElementsByClassName('button-show').innerText

        // const value = parseInt(buttonShow)
        // console.log('button-show', value)
        

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
    