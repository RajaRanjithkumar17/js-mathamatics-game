var startBtn = document.getElementById("start");
var dispProb = document.getElementsByClassName("containin")[0];
var checkResult = document.getElementById("checkResult");

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
    dispnum1.setAttribute("class","dispNum1")

    var dispoperator = document.createElement("h3");
    dispoperator.innerText = identOperator(getoperationEle);
    dispoperator.setAttribute("class","dispOpEle")

    var dispnum2 = document.createElement("h3");
    dispnum2.innerText = ranNum2;
    dispnum2.setAttribute("class","dispNum2")

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
    var ranNum1,ranNum2;
    // ranNum1.setAttribute("class", "rannum1")
    // ranNum2.setAttribute("class", "rannum2")

    console.log(getrangeEle);
    console.log(getoperationEle );

    //gen random num

    if(getoperationEle!=="division"){
        for(let i=0; i<=16; i++){
            var ranNum1 = genRandomnumber(getrangeEle);
            var ranNum2 = genRandomnumber(getrangeEle);
            updateTouser(ranNum1,ranNum2,getoperationEle);
           
            

        }
       
    }
    checkResult.addEventListener("click",()=>{
        {

            var num1Ele,num2Ele,operationEle,operationEleValue ,actualAns,expectAns,
            num1EleValue, num2EleValue,actualAnswer,aaa,mark=0;
            // 1.get num 1 and num2 value


            //3.find expect answer
                  
        
            
         for(i=0;i<16;i++){

            
            num1Ele = document.getElementsByClassName("dispNum1")[i];
            
            num1EleValue = parseInt(num1Ele.innerText);
            console.log(num1EleValue);

            num2Ele = document.getElementsByClassName("dispNum2")[i];
            num2EleValue = parseInt(num2Ele.innerText);
            console.log(num2EleValue);

            2// find operation

            operationEle = document.getElementsByClassName("dispOpEle")[i];
            operationEleValue = operationEle.innerText;

            console.log(operationEleValue );




          //  var arry= [];
           
            //arry.push(expectAns)
            // console.log(arry); //
             console.log(getoperationEle); //


            if(getoperationEle =="add"){
                expectAns =num1EleValue + num2EleValue ;

                var arry= [];
                console.log(arry);//
                
                arry.push(expectAns)
               }
              else if(getoperationEle=="sub"){
                expectAns =num1EleValue - num2EleValue ;
                arry.push(expectAns)
               }
             else  if(getoperationEle=="multiple"){
                expectAns =num1EleValue * num2EleValue ;
                arry.push(expectAns)
               }
         
       


        //4.get actual value
         var ans=[];
        actualAns = document.getElementsByClassName("answer")[0];
         aaa = parseInt(actualAns.value)


        ans.push(aaa);
        console.log(ans);

        
   


            }
                   //5.check answwwwwwwer
        //   if(ans[i]==arry[i]){
        //     mark = mark+1;
        //     alert(mark)
        // }

      
          
    
    }});

    } 
    startBtn.addEventListener("click",userInp);




 



