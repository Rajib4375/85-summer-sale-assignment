function calculatePriod1Area(){
    const baseTextElement =document.getElementById('base-text');
    const baseText = baseTextElement.innerText;
   const selectedItemArea = document.getElementById('selected-item');
   selectedItemArea.innerText = baseText;
   return selectedItemArea;  
}
function calculateAccessoriesArea(){
    const accessoriesTextElement =document.getElementById('accessories-title');
    const accessoriesText = accessoriesTextElement.innerText;
   const selectedItemArea = document.getElementById('selected-item');
   selectedItemArea.innerText = accessoriesText;
   return selectedItemArea;  
}

