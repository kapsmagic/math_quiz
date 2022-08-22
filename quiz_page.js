player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_quest").innerHTML="Question Turn "+ player1_name;
document.getElementById("player_ans").innerHTML="Answer Turn "+ player2_name;

function send() 
{
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    console.log(number1);
    console.log(number2);
    actAns = parseInt(number1) * parseInt(number2);
    console.log(actAns);

    questNo = "<h4>" + number1 + " X " + number2 +"</h4>";
    inpBox = "<br>Answer : <input type='text' id='inpChecBo'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>"
    row = questNo + inpBox + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}

quest_turn = "player1_name";
ans_turn = "player2_name";

function check()
{
    get_answer = document.getElementById("inpChecBo").value; 
    if(get_answer == actAns)
    {
        if(ans_turn=="player1_name")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(quest_turn=="player1_name")
    {
        ques_turn="player2_name";
        document.getElementById("player_quest").innerHTML="question_turn "+player2_name;
    }
    else
    {
        quest_turn="player1_name";
        document.getElementById("player_quest").innerHTML="question_turn "+player1_name;
    }

    if(ans_turn=="player1_name")
    {
        ans_turn="player2_name";
        document.getElementById("player_ans").innerHTML="answer_turn "+player2_name;
    }
    else
    {
        ans_turn="player1_name";
        document.getElementById("player_ans").innerHTML="answer_turn "+player1_name;
    }
}
