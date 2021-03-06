boxClick();
playersMarkArray();
var player = "X";
var player1_values;
var player2_values;
var t = 0;

function boxClick() {
    let boxes = document.querySelectorAll(".box");
    
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", (event) => {

            document.getElementById(event.target.id).innerHTML = player;
            document.getElementById(event.target.id).style.pointerEvents = "none";
    
            
            if (player == "X") {
                console.log("inside x")
                if (event.target.id % 3 == 0) {
                    var i = parseInt(event.target.id / 3) - 1;
                } else {
                    var i = parseInt(event.target.id / 3);
                }

                if (event.target.id % 3 == 0) {
                    var j = 2
                } else {
                    var j = (event.target.id % 3) - 1;
                }

                console.log(i, j);
                player1_values[i][j] = 1;
                playersCheckForWin(i, j)
                player = "O";
            } else {


                console.log("inside O")
                if (event.target.id % 3 == 0) {
                    var i = parseInt(event.target.id / 3) - 1;
                } else {
                    var i = parseInt(event.target.id / 3);
                }

                if (event.target.id % 3 == 0) {
                    var j = 2
                } else {
                    var j = (event.target.id % 3) - 1;
                }
                player2_values[i][j] = 1;
                playersCheckForWin(i, j)
                player = "X";
            }

        });
    }
}


function playersMarkArray() {
    player1_values = Array(3);
    player2_values = Array(3);

    for (var i = 0; i < 3; i++) {
        player1_values[i] = Array(3);
        player2_values[i] = Array(3);

    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            player1_values[i][j] = 0;
            player2_values[i][j] = 0;

        }
    }

}

function makingAllBoxDisabled() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).style.pointerEvents = "none";
    }
}

function displayResults(s) {
    alert(s);
}

function playersCheckForWin(i, j) {
    t++;

    // for horizontal row
    for (var i = 0; i < 3; i++) {
        var count1 = 0;
        var count2 = 0;

        for (var j = 0; j < 3; j++) {
            if (player1_values[i][j] == 1) {
                count1++;
            }
            if (player2_values[i][j] == 1) {
                count2++;
            }

            if (count1 == 3) {
                var statement = "Congratulations! Player1 wins";
                displayResults(statement);
                makingAllBoxDisabled();
                return;


            } else if (count2 == 3) {
                var statement = "Congratulations! Player2 wins";
                displayResults(statement);
                makingAllBoxDisabled();
                return;

            }
        }
    }

    // for vertical row
    for (var i = 0; i < 3; i++) {

        var count1 = 0;
        var count2 = 0;
        for (var j = 0; j < 3; j++) {
            if (player1_values[j][i] == 1) {
                count1++;
            }
            if (player2_values[j][i] == 1) {
                count2++;
            }
            if (count1 == 3) {
                var statement = "Congratulations! Player1 wins";
                displayResults(statement);
                makingAllBoxDisabled();
                return;
            } else if (count2 == 3) {
                var statement = "Congratulations! Player2 wins";
                displayResults(statement);
                makingAllBoxDisabled();
                return;
            }
        }
    }

    // for diagonal line
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < 3; i++) {


        var j = 2 - i;
        if (player1_values[i][j] == 1) {
            count1++;
        }
        if (player2_values[i][j] == 1) {
            count2++;
        }

        if (count1 == 3) {
            var statement = "Congratulations! Player1 wins";
            displayResults(statement);
            makingAllBoxDisabled();
            return;
        } else if (count2 == 3) {
            var statement = "Congratulations! Player2 wins";
            displayResults(statement);
            makingAllBoxDisabled();
            return;
        }

    }
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < 3; i++) {

        if (player1_values[i][i] == 1) {
            count1++;
        }
        if (player2_values[i][i] == 1) {
            count2++;
        }

        if (count1 == 3) {
            var statement = "Congratulations! Player1 wins";
            displayResults(statement);
            makingAllBoxDisabled();
            return;
        } else if (count2 == 3) {
            var statement = "Congratulations! Player2 wins";
            displayResults(statement);
            makingAllBoxDisabled();
            return;
        }
    }
    if (t == 9) {
        var statement = "Draw!";
        displayResults(statement);
    }


}