

var game = [["0","0","0"], ["0","0","0"], ["0","0","0"]];

/*******************************
 * startGame will set up the gameboard
 */
function startGame(){
  game = [["0","0","0"], ["0","0","0"], ["0","0","0"]];
  document.getElementById("winners").innerHTML = "";
  var table = `<table class="n-bordered">`;
  for (var iRow = 1; iRow < 4; ++iRow)
  {
    table += "<tr>";

    for (var iCol = 0; iCol < 3; ++iCol)
    {
      if(game[iCol * iRow] ==='X')
      {
        table += `<td> X </td>`;
      }
      else if(game[iCol * iRow] === 'O')
      {
        table += `<td> O </td>`;
      }
      else
      {
        table += 
          `<td>
            <span id = "${iRow}${iCol}">
              <input type = "button" value = "?" onclick ="squareClicked(${iRow}, ${iCol})">
            </span>
          </td>`;
      }
    }
    table += "</tr>";
  }
  document.getElementById("board").innerHTML = table;
}

/*******************************
 * squareClicked will update the board to allow for a choice of X or O
 */
function squareClicked(row, col){

  var rowCol = "" + row + col;
  document.getElementById(rowCol).innerHTML = `<input type = "button" onclick ="clickedTwo(${row}, ${col}, 'O')" value = "O"> 
                                              <input type = "button" onclick ="clickedTwo(${row}, ${col}, 'X')" value = "X">`;
}

/*******************************
 * clickedTwo will take the x or o choice given by the user and set the board to reflect that choice
 */
function clickedTwo(row, col, XorO){
  var rowCol = "" + row + col;
  if (XorO == 'X')
  {
    document.getElementById(rowCol).innerHTML = "X";
    game[row - 1][col] = "X";
  }
  else 
  {
    document.getElementById(rowCol).innerHTML = "O";
    game[row - 1][col] = "O";

  }
  checkForWin();
}

/*******************************
 * checkForWin will check the board for a win and display the winner to the page
 */
function checkForWin()
{
  console.log(game);
  var winner;
  for(var rowIndex = 0; rowIndex < 3; ++rowIndex)
  {
    if (game[rowIndex][0] === "X" && game[rowIndex][1] === "X" && game[rowIndex][2] === "X")
    {
      winner = "X";
    }
    if (game[rowIndex][0] === "O" && game[rowIndex][1] === "O" && game[rowIndex][2] === "O")
    {
      winner = "O";
    }   
  }
  for(var colIndex = 0; colIndex < 3; ++colIndex)
  {
    if (game[0][colIndex] === "X" && game[1][colIndex] === "X" && game[2][colIndex] === "X")
    {
      winner = "X";
    }   
    if (game[0][colIndex] === "O" && game[1][colIndex] === "O" && game[2][colIndex] === "O")
    {
      winner = "O";
    }   
  }
  if (game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X")
  {
    winner = "X";
  }
  else if (game[0][0] === "O" && game[1][1] === "O" && game[2][2] === "O")
  {
    winner = "O";
  }
  else if (game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X")
  {
    winner = "X";
  }
  else if (game[0][2] === "O" && game[1][1] === "O" && game[2][0] === "O")
  {
    winner = "O";
  }
  if (winner === "X" || winner ==="O")
  {
    document.getElementById("winners").innerHTML = winner + " wins!";
  }
}

