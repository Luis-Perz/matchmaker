var ques1 = document.getElementById("question1").value;
var ques2 = document.getElementById("question2").value;
var ques3 = document.getElementById("question3").value;
var ques4 = document.getElementById("question4").value;
var ques5 = document.getElementById("question5").value;


function compatResults(){
    var ques1 = document.getElementById("question1").value;
    var ques2 = document.getElementById("question2").value;
    var ques3 = document.getElementById("question3").value;
    var ques4 = document.getElementById("question4").value;
    var ques5 = document.getElementById("question5").value;
    total = parseInt(ques1) + parseInt(ques2) + parseInt(ques3) + parseInt(ques4) + parseInt(ques5);
    score = 100 - total;
    return score;
}

function resultMsg(){
    var user_Msg;
    if (compatResults() > 80){
        user_Msg = "Got any plans for this weekend?"
    }
    if (compatResults() > 60){
        user_Msg = "You're cool, I guess we can be friends."
    }
    else (compatResults() < 60);{
        user_Msg = "Go ahead and close this window. Try again."
    }
    return user_Msg;
}


function statementRes(){
    var ques1 = document.getElementById("question1").value;
    var ques2 = document.getElementById("question2").value;
    var ques3 = document.getElementById("question3").value;
    var ques4 = document.getElementById("question4").value;
    var ques5 = document.getElementById("question5").value;
    var que1Score = 100 - ques1;
    var que2Score = 100 - ques2;
    var que3Score = 100 - ques3;
    var que4Score = 100 - ques4;
    var que5Score = 100 - ques5;

    document.getElementById("answer1").textContent = que1Score;
    document.getElementById("answer2").textContent = que2Score;
    document.getElementById("answer3").textContent = que3Score;
    document.getElementById("answer4").textContent = que4Score;
    document.getElementById("answer5").textContent = que5Score;
}


document.getElementById("redBtn").addEventListener("click", () => {
    console.log(compatResults());
    if (compatResults() <= -1){
        window.alert("Please select an option for all of the statements! Thank You.")
    }
    else{
        window.open("./results.html");
    }

    
    statementRes();
});

document.getElementById("resultMsg").textContent ="hello";
