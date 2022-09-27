var startBtn = document.getElementById("start");
var dispProb = document.getElementsByClassName("containin")[0];
var checkResult = document.getElementById("checkResult"),icmnt=0, userResult;

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
    dispDiv.setAttribute("id","containinput");

    var  dispDivstyle = document.createElement("div");
    dispDivstyle.setAttribute("class","flex-box");

    var dispnum1 = document.createElement("h3");
    dispnum1.innerText = ranNum1;

    var dispoperator = document.createElement("h3");
    dispoperator.innerText = identOperator(getoperationEle);

    var dispnum2 = document.createElement("h3");
    dispnum2.innerText = ranNum2;

    var inputEle = document.createElement("input");
    inputEle.setAttribute("id","answer"+icmnt);
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
    var ranNum1,ranNum2;
    // ranNum1.setAttribute("class", "rannum1")
    // ranNum2.setAttribute("class", "rannum2")

    console.log(getrangeEle);
    console.log(getoperationEle );

    //gen random num

    if(getoperationEle!==" "){
        for(let i=1; i<=16; i++){
            var ranNum1 = genRandomnumber(getrangeEle);
            var ranNum2 = genRandomnumber(getrangeEle);
            updateTouser(ranNum1,ranNum2,getoperationEle);
            var arry= [];
            var result;
           
            arry.push(result)
            console.log(arry);
            
           if(getoperationEle=="add"){
            result =ranNum1+ranNum2;
            arry.push(result)
           }
           if(getoperationEle=="sub"){
            result =ranNum1-ranNum2;
            arry.push(result)
           }
           if(getoperationEle=="multiple"){
            result =ranNum1*ranNum2;
            arry.push(result)
           }
           if(getoperationEle=="division"){
            result =ranNum1/ranNum2;
            arry.push(result)
           }
            

        }
       
    }
    checkResult.addEventListener("click",()=>{
        {
            var userRes = document.getElementById("answer"+icmnt);
            var userResultcheck = document.getElementById("containinput");
            console.log(userRes);
            console.log(userResultcheck);
            
            var userinp=[];
            for(a=1;a<=16;a++){            // pending
                if(getoperationEle==" "){  //
                    
                    userinp.push(userRes.value) //

                }
                icmnt++; //
                console.log(icmnt); //
            }
            
            console.log(userinp);
            





        //     finalresult.innerText = userResult.value;
        //   console.log(finalresult);

            if(userinp[0]==arry[0]){
                userResultcheck.style.border;"1px solid green";
            }
            else{
                userResultcheck.style.border;"  1px solid red";
            }
        
    
    }});

    } 

 startBtn.addEventListener("click",userInp);


 



