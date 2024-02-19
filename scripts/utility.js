function getElementTextById(Id){
    const element = document.getElementById(Id);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText)
}



const allButton = document.getElementsByClassName('btn-show')


let total = 8;
let count = 0;
let totalPrice = 0;
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
        const priceShowValue= priceShow.appendChild(price)

        // const priceValue = parseFloat(priceShowValue)
        const value =priceShowValue.innerText
        const numValue = parseFloat(value)
        // console.log(numValue)

        totalPrice= totalPrice+ numValue
        console.log(totalPrice)

        document.getElementById('total-price').innerText=totalPrice
        
        
        
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

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
    // console.log(btn)
    const couponCode = document.getElementById('input-field').value
    // console.log(couponCode)

    if(couponCode==='NEW15'){
        const discount = totalPrice * 0.15
        const grandTotal = document.getElementById('grand-total')
        grandTotal.innerText= totalPrice - discount

        const getInputField = document.getElementById('input-field')
        getInputField.classList.add('hidden')

        const getApplyBtn = document.getElementById('apply-btn')
        getApplyBtn.classList.add('hidden')

        
    }
    else if(couponCode==='Couple 20'){
        const discount = totalPrice * 0.2
        const grandTotal = document.getElementById('grand-total')
        grandTotal.innerText= totalPrice - discount

        const getInputField = document.getElementById('input-field')
        getInputField.classList.add('hidden')

        const getApplyBtn = document.getElementById('apply-btn')
        getApplyBtn.classList.add('hidden')
    }
    else{
        alert('Invalid Coupon code')
    }
})


function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden')
}


function showElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden')
}


    