var startBtn = document.getElementById("start");
var dispProb = document.getElementsByClassName("containin")[0];



 var q=2;
function genRandomnumber(q){
    return parseInt(Math.random()*q )

}

function identOperator(identOperat){
    switch(identOperat){
        case "add":
            return "+";
            break;
        case "sub":
            return "-";
            break;
        case "multiple":
            return "*";
            break;
            default:
            return"/";

    }

   }


function updateTouser(ranNum1,ranNum2,getoperationEle){
    var  dispDiv = document.createElement("div");
    dispDiv.setAttribute("class","containinput");

    var  dispDivstyle = document.createElement("div");
    dispDivstyle.setAttribute("class","flex-box");

    var dispnum1 = document.createElement("h3");
    dispnum1.innerText = ranNum1;

    var dispoperator = document.createElement("h3");
    dispoperator.innerText = identOperator(getoperationEle);

    var dispnum2 = document.createElement("h3");
    dispnum2.innerText = ranNum2;

    var inputEle = document.createElement("input");
    inputEle.setAttribute("class","answer");
    inputEle.setAttribute("type","text");
   
    dispDiv.appendChild(dispnum1);
    dispDiv.appendChild(dispoperator);
    dispDiv.appendChild(dispnum2);
    dispDiv.appendChild(inputEle);
    dispDivstyle.appendChild(dispDiv)
    dispProb.appendChild(dispDivstyle);
    
    

   

}


 const userInp = function(){
    var operationEle = document.getElementById("operation");
    var rangeEle = document.getElementById("range");
    var getoperationEle = operationEle.value ;
    var getrangeEle = parseInt( rangeEle.value);//
    var ranNum1,ranNum2,range;

    console.log(getrangeEle);
    console.log(getoperationEle );

    //gen random num

    if(getoperationEle!=="division"){
        for(let i=1; i<=16; i++){
            var ranNum1 = genRandomnumber(getrangeEle);
            var ranNum2 = genRandomnumber(getrangeEle);
            updateTouser(ranNum1,ranNum2,getoperationEle);
            

        }

    } 
    
 }
    

 startBtn.addEventListener("click",userInp)