player1_name = localStorage.getItem("1st_name_math");
player2_name = localStorage.getItem("2nd_name_math");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " :  ";
document.getElementById("player2").innerHTML = player2_name + " :  ";

document.getElementById("score_1player").innerHTML = player1_score;
document.getElementById("score_2player").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question turn - " +  player1_name;
document.getElementById("player_ans").innerHTML = "Answer turn - " +  player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "&nbsp" + "&nbsp" + "=" + "</h4>";
    input_box = "<br>Answer : <input type = 'number' id = 'input_check_box' placeholder = 'Enter your answer'";
    check_button = "<br><br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
