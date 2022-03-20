var turn = 1;
var myFunctionCalls = 0;
function playerAction(elem){
    if (elem.innerHTML != ""){
        return;
    }
    if (turn == 1){
        elem.innerHTML = "X";
        document.getElementById('playerMessage').innerHTML = "Player O's Turn";
        turn = 2;
        myFunctionCalls++;
    }
        else if (turn == 2){
            elem.innerHTML = "O";
            document.getElementById('playerMessage').innerHTML = "Player X's Turn";
            turn = 1;
            myFunctionCalls++;
    }
    if(myFunctionCalls == 9){
        console.log('Draw!');
        alert('Draw!');
           document.getElementById('column1').innerHTML = "";
           document.getElementById('column2').innerHTML = "";
           document.getElementById('column3').innerHTML = "";
           document.getElementById('column4').innerHTML = "";
           document.getElementById('column5').innerHTML = "";
           document.getElementById('column6').innerHTML = "";
           document.getElementById('column7').innerHTML = "";
           document.getElementById('column8').innerHTML = "";
           document.getElementById('column9').innerHTML = "";
           turn = 1;
           myFunctionCalls = 0;
    }
    console.log(elem);
}
function playerWinner (){
    if(document.getElementById('column1').innerHTML == "X" && (document.getElementById('column2').innerHTML == "X" && (document.getElementById('column3').innerHTML == "X"))){
        console.log("Player X wins");
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column1').innerHTML == "O" && (document.getElementById('column2').innerHTML == "O" && (document.getElementById('column3').innerHTML == "O"))){
            console.log("Player O wins");
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
    if(document.getElementById('column4').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column6').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column4').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column6').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
    if(document.getElementById('column7').innerHTML == "X" && document.getElementById('column8').innerHTML == "X" && document.getElementById('column9').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column7').innerHTML == "O" && document.getElementById('column8').innerHTML == "O" && document.getElementById('column9').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
    if(document.getElementById('column1').innerHTML == "X" && document.getElementById('column4').innerHTML == "X" && document.getElementById('column7').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column1').innerHTML == "O" && document.getElementById('column4').innerHTML == "O" && document.getElementById('column7').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
        }
    if(document.getElementById('column2').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column8').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column2').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column8').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
    if(document.getElementById('column3').innerHTML == "X" && document.getElementById('column6').innerHTML == "X" && document.getElementById('column9').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column3').innerHTML == "O" && document.getElementById('column6').innerHTML == "O" && document.getElementById('column9').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
    if(document.getElementById('column1').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column9').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column1').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column9').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
    if(document.getElementById('column3').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column7').innerHTML == "X"){
        console.log('Player X Wins');
        alert("Player X Wins!");
        myFunctionCalls = 0;
    }
        else if(document.getElementById('column3').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column7').innerHTML == "O"){
            console.log('Player O Wins');
            alert("Player O Wins!");
            myFunctionCalls = 0;
        }
}

function resetButton(){
    document.getElementById('column1').innerHTML = "";
    document.getElementById('column2').innerHTML = "";
    document.getElementById('column3').innerHTML = "";
    document.getElementById('column4').innerHTML = "";
    document.getElementById('column5').innerHTML = "";
    document.getElementById('column6').innerHTML = "";
    document.getElementById('column7').innerHTML = "";
    document.getElementById('column8').innerHTML = "";
    document.getElementById('column9').innerHTML = "";
    turn = 1;
    return;
}

let check = true;
let x = 0;
let y = 0;
function scoreBoard(){
    if(document.getElementById('column1').innerHTML == "X" && (document.getElementById('column2').innerHTML == "X" && (document.getElementById('column3').innerHTML == "X"))){
       if(x < 10 && check == true){
           x++;
           document.getElementById('scoreKeeper1').innerHTML = x;
        }
    }
     if(document.getElementById('column4').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column6').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
    }
    if(document.getElementById('column7').innerHTML == "X" && document.getElementById('column8').innerHTML == "X" && document.getElementById('column9').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
    }
    if(document.getElementById('column1').innerHTML == "X" && document.getElementById('column4').innerHTML == "X" && document.getElementById('column7').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
    }
    if(document.getElementById('column2').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column8').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
    }
    if(document.getElementById('column3').innerHTML == "X" && document.getElementById('column6').innerHTML == "X" && document.getElementById('column9').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
    }
    if(document.getElementById('column1').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column9').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
    }
    if(document.getElementById('column3').innerHTML == "X" && document.getElementById('column5').innerHTML == "X" && document.getElementById('column7').innerHTML == "X"){
        if(x < 10 && check == true){
            x++;
            document.getElementById('scoreKeeper1').innerHTML = x;
         }
        
    }

}
function scoreBoard2(){
    if(document.getElementById('column1').innerHTML == "O" && (document.getElementById('column2').innerHTML == "O" && (document.getElementById('column3').innerHTML == "O"))){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
     }
     if(document.getElementById('column4').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column6').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
    }
    if(document.getElementById('column7').innerHTML == "O" && document.getElementById('column8').innerHTML == "O" && document.getElementById('column9').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
    }
    if(document.getElementById('column1').innerHTML == "O" && document.getElementById('column4').innerHTML == "O" && document.getElementById('column7').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
    }
    if(document.getElementById('column2').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column8').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
    }
    if(document.getElementById('column3').innerHTML == "O" && document.getElementById('column6').innerHTML == "O" && document.getElementById('column9').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
    }
    if(document.getElementById('column1').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column9').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
    }
    if(document.getElementById('column3').innerHTML == "O" && document.getElementById('column5').innerHTML == "O" && document.getElementById('column7').innerHTML == "O"){
        if(y < 10 && check == true){
            y++;
            document.getElementById('scoreKeeper2').innerHTML = y;
         }
       }
       if(x == 10){
           console.log('Player 1 Wins!')
           alert('Player X is the Winner!')
           document.getElementById('scoreKeeper1').innerHTML = 0;
           document.getElementById('scoreKeeper2').innerHTML = 0;
           document.getElementById('column1').innerHTML = "";
           document.getElementById('column2').innerHTML = "";
           document.getElementById('column3').innerHTML = "";
           document.getElementById('column4').innerHTML = "";
           document.getElementById('column5').innerHTML = "";
           document.getElementById('column6').innerHTML = "";
           document.getElementById('column7').innerHTML = "";
           document.getElementById('column8').innerHTML = "";
           document.getElementById('column9').innerHTML = "";
           turn = 1;
           document.location.reload();
       }
       if(y == 10){
           console.log('Player 2 Wins!');
           alert('Player O is the Winner!');
           document.getElementById('scoreKeeper1').innerHTML = 0;
           document.getElementById('scoreKeeper2').innerHTML = 0;
           document.getElementById('column1').innerHTML = "";
           document.getElementById('column2').innerHTML = "";
           document.getElementById('column3').innerHTML = "";
           document.getElementById('column4').innerHTML = "";
           document.getElementById('column5').innerHTML = "";
           document.getElementById('column6').innerHTML = "";
           document.getElementById('column7').innerHTML = "";
           document.getElementById('column8').innerHTML = "";
           document.getElementById('column9').innerHTML = "";
           turn = 1;
           document.location.reload();
       }
    }


function playerChoice1(){
    turn = 1;
    document.getElementById('playerMessage').innerHTML = "Player X's Turn"
}
function playerChoice2(){
    turn = 2;
    document.getElementById('playerMessage').innerHTML = "Player O's Turn"
}