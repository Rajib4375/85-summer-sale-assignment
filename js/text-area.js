function textElementArea(){
    const baseTextElement = document.getElementById('text-accessories');
    const baseText = baseTextElement.innerText;
    const selectedTextArea = document.getElementById('selected-items');
    selectedTextArea.innerText = baseText;
}
function textAccessoriesArea(){
    const textFiledArea = document.getElementById('Accessories-title');
    const textFild = textFiledArea.innerText;
    const selectedTextArea = document.getElementById('selected1-items');
    selectedTextArea.innerText = textFild;
}

function textHomeCookerArea(){
    const homeCookerFiledArea = document.getElementById('homecooker-title');
    const homeCookerFild = homeCookerFiledArea.innerText;
    const selectedTextArea = document.getElementById('selected2-items');
    selectedTextArea.innerText = homeCookerFild;
}

function sportsCapAreaText(){
    const sportsCapFiledArea = document.getElementById('sportsCap-title');
    const sportsCapFild = sportsCapFiledArea.innerText;
    const selectedTextArea = document.getElementById('selected3-items');
    selectedTextArea.innerText = sportsCapFild;
}
function fullJerseyText(){
    const jersyFiledArea = document.getElementById('jersy-title');
    const jersyFild = jersyFiledArea.innerText;
    const selectedTextArea = document.getElementById('selected4-items');
    selectedTextArea.innerText = jersyFild;
}
function sportscatesText(){
    const sportsCatesFiledArea = document.getElementById('sportsCates-title');
    const sportsCatesFild = sportsCatesFiledArea.innerText;
    const selectedTextArea = document.getElementById('selected5-items');
    selectedTextArea.innerText = sportsCatesFild;
}

