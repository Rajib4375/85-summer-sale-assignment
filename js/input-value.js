
document.getElementById('button-apply').addEventListener('click', function(){

    const couponText = document.getElementById('coupon-code');
    const coupon = couponText.innerText
    console.log(coupon)
   
    const inputFiledValue = document.getElementById('input-filed');
    const inputFiled = inputFiledValue.value;
    const totalPriceText = document.getElementById('total-price-text');
    const totalPrice = totalPriceText.innerText;
    console.log(totalPrice)


    if(inputFiled ===coupon){
        
    }


    
    

})
