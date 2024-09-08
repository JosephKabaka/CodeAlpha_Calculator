let currentNo="";
let prevNo="";
let operator;

function appendNumber(number){
    if (number==="."&&currentNo.includes(".")) return;
    currentNo= currentNo.toString() + number.toString();
    displayNo();
}

function displayNo(){
    document.getElementById("input").value=currentNo;
}
function chooseOparator(op){
   
    if (currentNo === '')return;
    if(prevNo !==''){
        calc();
    }
    operator=op;
    prevNo = currentNo;
    currentNo='';
    document.getElementById("input").value=operator;
    
}
function calc(){
    
    let result;
    let prev= parseFloat(prevNo);
    let current= parseFloat(currentNo);
    if(isNaN(prev)|| isNaN(current))return;
    switch(operator){
        case '+':
            result=prev+current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        // default:
        //     return;
    }

    currentNo = result;
    operator= undefined;
    prevNo='';
    displayNo();
}


function clearBtn(){
    
    currentNo='';
    prevNo='';
    operator=undefined;
    displayNo();
}
