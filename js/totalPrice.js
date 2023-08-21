// Accessories -1
document.getElementById('click-item').addEventListener('click', function(){
    const priceFiledElement = document.getElementById('Accessories-price');
    const priceFiled = priceFiledElement.innerText;
    const priceText = parseFloat(priceFiled);
    const totalPriceAreaSpan = document.getElementById('total-price-text');
    totalPriceAreaSpan.innerText = priceText.toFixed(2);
    const buttonClick = document.getElementById('purchase-button');
    buttonClick.disabled = true;
   if(priceText > 0){
    buttonClick.disabled = false;
}

    
    
})

// Accessories -2
document.getElementById('Accessories-item').addEventListener('click', function(){
    const accessoriesFildElement = document.getElementById('accessories-priceText');
   const accessoriesFild = accessoriesFildElement.innerText;
   const accessoriesprice = parseFloat(accessoriesFild);

   const priceFiledElement = document.getElementById('Accessories-price');
   const priceFiled = priceFiledElement.innerText;
   const priceText = parseFloat(priceFiled);

   const totalPrice = priceText + accessoriesprice;
   const totalPriceAreaSpan = document.getElementById('total-price-text');
     totalPriceAreaSpan.innerText = totalPrice.toFixed(2);

})
// Home Cooker
document.getElementById('click-home').addEventListener('click',function(){
    const homeCookerpriceElement =document.getElementById('homecooker-price');
    const homecookerPrice = homeCookerpriceElement.innerText;
    const homecooker =parseFloat(homecookerPrice);
    const accessoriesFildElement = document.getElementById('accessories-priceText');
    const accessoriesFild = accessoriesFildElement.innerText;
    const accessoriesprice = parseFloat(accessoriesFild);
 
    const priceFiledElement = document.getElementById('Accessories-price');
    const priceFiled = priceFiledElement.innerText;
    const priceText = parseFloat(priceFiled); 
    const totalPrice = priceText + accessoriesprice + homecooker;
    const totalPriceAreaSpan = document.getElementById('total-price-text');
     totalPriceAreaSpan.innerText = totalPrice.toFixed(2);

})
// 
document.getElementById('click-sportscap').addEventListener('click', function(){
    const sportsCappriceElement =document.getElementById('sportscap-price');
    const sportsCapPrice = sportsCappriceElement.innerText;
    const sportsCap =parseFloat(sportsCapPrice);
    const homeCookerpriceElement =document.getElementById('homecooker-price');
    const homecookerPrice = homeCookerpriceElement.innerText;
    const homecooker =parseFloat(homecookerPrice);
    const accessoriesFildElement = document.getElementById('accessories-priceText');
    const accessoriesFild = accessoriesFildElement.innerText;
    const accessoriesprice = parseFloat(accessoriesFild);
   const priceFiledElement = document.getElementById('Accessories-price');
    const priceFiled = priceFiledElement.innerText;
    const priceText = parseFloat(priceFiled);
    const totalPrice = priceText + accessoriesprice + homecooker + sportsCap;
    const totalPriceAreaSpan = document.getElementById('total-price-text');
     totalPriceAreaSpan.innerText = totalPrice.toFixed(2);
})
document.getElementById('click-fulljerser').addEventListener('click', function(){
    const jarseypriceElement =document.getElementById('jarsey-price');
    const jarseyPrice = jarseypriceElement.innerText;
    const jarsey =parseFloat(jarseyPrice);
    const sportsCappriceElement =document.getElementById('sportscap-price');
    const sportsCapPrice = sportsCappriceElement.innerText;
    const sportsCap =parseFloat(sportsCapPrice);
    const homeCookerpriceElement =document.getElementById('homecooker-price');
    const homecookerPrice = homeCookerpriceElement.innerText;
    const homecooker =parseFloat(homecookerPrice);
    const accessoriesFildElement = document.getElementById('accessories-priceText');
    const accessoriesFild = accessoriesFildElement.innerText;
    const accessoriesprice = parseFloat(accessoriesFild);
   const priceFiledElement = document.getElementById('Accessories-price');
    const priceFiled = priceFiledElement.innerText;
    const priceText = parseFloat(priceFiled);
    const totalPrice = priceText + accessoriesprice + homecooker + sportsCap + jarsey;
    const totalPriceAreaSpan = document.getElementById('total-price-text');
     totalPriceAreaSpan.innerText = totalPrice.toFixed(2);

     // Apply button
    const buttonClick = document.getElementById('button-apply');
    buttonClick.disabled = true;
   if(totalPrice > 200){
    buttonClick.disabled = false;
}

})
document.getElementById('click-sportscates').addEventListener('click', function(){
    const catespriceElement =document.getElementById('cates-price');
    const catesPrice = catespriceElement.innerText;
    const cates =parseFloat(catesPrice);
    const jarseypriceElement =document.getElementById('jarsey-price');
    const jarseyPrice = jarseypriceElement.innerText;
    const jarsey =parseFloat(jarseyPrice);
    const sportsCappriceElement =document.getElementById('sportscap-price');
    const sportsCapPrice = sportsCappriceElement.innerText;
    const sportsCap =parseFloat(sportsCapPrice);
    const homeCookerpriceElement =document.getElementById('homecooker-price');
    const homecookerPrice = homeCookerpriceElement.innerText;
    const homecooker =parseFloat(homecookerPrice);
    const accessoriesFildElement = document.getElementById('accessories-priceText');
    const accessoriesFild = accessoriesFildElement.innerText;
    const accessoriesprice = parseFloat(accessoriesFild);
   const priceFiledElement = document.getElementById('Accessories-price');
    const priceFiled = priceFiledElement.innerText;
    const priceText = parseFloat(priceFiled);
    const totalPrice = priceText + accessoriesprice + homecooker + sportsCap + jarsey + cates;
    const totalPriceAreaSpan = document.getElementById('total-price-text');
     totalPriceAreaSpan.innerText = totalPrice.toFixed(2);






document.getElementById('button-apply').addEventListener('click', function(){

    const couponText = document.getElementById('coupon-code');
    const coupon = couponText.innerText
    
   
    const inputFiledValue = document.getElementById('input-filed');
    const inputFiled = inputFiledValue.value;
    
    



    if(inputFiled ===coupon){
        const discountAmount = (totalPrice * 20)/100;
        const discountAreaSpan =document.getElementById('discount-area');
        discountAreaSpan.innerText= discountAmount.toFixed(2);  
       
        
        const totalAmount = totalPrice - discountAmount;
        const totalAmountAreaSpan = document.getElementById('total-area');
        totalAmountAreaSpan.innerText =totalAmount.toFixed(2);
    }

})

})


// modal button

const modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', reloadWebsite);
function reloadWebsite(){
    location.reload();
}

