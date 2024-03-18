document.getElementById("resCont2").style.visibility = "hidden";
function inputValidation(){
    var userInput1 = parseInt(document.getElementById("question1").selectedOptions[0].value);
    var userInput2 = parseInt(document.getElementById("question2").selectedOptions[0].value); 
    var userInput3 = parseInt(document.getElementById("question3").selectedOptions[0].value); 
    var userInput4 = parseInt(document.getElementById("question4").selectedOptions[0].value);
    var userInput5 = parseInt(document.getElementById("question5").selectedOptions[0].value);
    
    var sumInputs = userInput1 + userInput2 + userInput3 + userInput4 + userInput5;
    var sumTotal = 100 - sumInputs;

    return sumTotal;
 }


function resultMessage(){
    var userInput1 = parseInt(document.getElementById("question1").selectedOptions[0].value);
    var userInput2 = parseInt(document.getElementById("question2").selectedOptions[0].value); 
    var userInput3 = parseInt(document.getElementById("question3").selectedOptions[0].value); 
    var userInput4 = parseInt(document.getElementById("question4").selectedOptions[0].value);
    var userInput5 = parseInt(document.getElementById("question5").selectedOptions[0].value);
    
    var sumInputs = userInput1 + userInput2 + userInput3 + userInput4 + userInput5;
    var sumTotal = 100 - sumInputs;

    if (sumTotal >= 80){
        document.getElementById("resultMsg").textContent = "Let's go to Chuck E. Cheese";
    } else if (sumTotal >= 60){
        document.getElementById("resultMsg").textContent = "I guess we can be friends";
    } else{  
        document.getElementById("resultMsg").textContent = "Tragic...";
    }
}

document.getElementById("redBtn").addEventListener("click", () => {
    
    if (inputValidation() < 0 ){
        window.alert("Please select an option for all of the statements! Thank You.")
    }
    else{
        document.getElementById("resCont2").style.visibility = "visible";
        document.getElementById("question-list").style.visibility = "hidden";
        console.log(inputValidation());
        document.getElementById("resultPercent").textContent = inputValidation()+"%";
        resultMessage();
    }

});
