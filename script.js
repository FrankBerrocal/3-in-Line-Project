/*let board=[0,0,0,0,0,0,0,0,0]; //initial board*/
let board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];  //creates array of 18 positions as initial board
/*let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; //winning positions*/
let win =[[0,1,2], [3,4,5], [6,7,8], [9,10,11], [12,13,14], [15,16,17], [0,3,6], [3, 6, 9], [6, 9, 12], [9, 12, 15], [1,4,7], [4, 7, 10], [7, 10, 13], [10, 13, 16], [2, 5, 8], [5, 8, 11], [8, 11, 14], [11, 14, 17], [0, 4, 8], [3, 7, 11], [6, 10, 14], [9, 13, 17], [6, 4, 2], [9, 7, 5], [12, 10, 8], [15, 13, 11 ] ]; //subarrays describing all possible winning positions
let turn=0;


function checkWin(val)
{
  for(let rwin of win)
  {
    if(board[rwin[0]]==val && board[rwin[1]]==val && board[rwin[2]]==val)
    return true;
  }
  return false;
}

let divCells = document.getElementsByClassName('Cell');

for(let cell of divCells)
{
  
  cell.onclick = puttSymbol;

}


function puttSymbol()
{
  //alert(board);
  //alert ("Clicked "+ turn);
  if(turn%2==0 && board[Number(this.title)]==0)
  {
    board[Number(this.title)]=1;

    if(checkWin(1))
    {
      //alert("Winner X");
      //restartGame(1);
      setTimeout(function(){ restartGame(1); },500);
    }
    //alert("X Clicked...");
    //alert();
    //alert(this.title);
    this.style.backgroundImage= "url('blue.gif')";
    turn++;
  
  }
  else if(board[Number(this.title)]==0){
    board[Number(this.title)]=2;

    if(checkWin(2))
    {
      //alert("Winner 0");
      setTimeout(function(){ restartGame(2); },500);
      //restartGame(2);
    }
    //alert("O Clicked...");
    //alert(this.title);
    this.style.backgroundImage="url('red.gif')";
    turn++;

  }
  if(turn==17 && checkWin(1)==false && checkWin(2)==false)
  {
    //alert("its a draw...");
    setTimeout(function(){ restartGame(0); },500);
    //restartGame(0);
  }
}


document.getElementById('restart').onclick=reloadGame;

function reloadGame()
{
  location.reload();
}

function restartGame(winner)
{
  //alert(winner);
  document.getElementById('Board').style.display="none";
  document.getElementById('GameOver').style.display="block";
  if(winner==1)
  {
    document.getElementById('txtGameOver').innerHTML="Congratulations! Player-01 (Blue) Wins!";
  }
  else if(winner==2)
  {
    document.getElementById('txtGameOver').innerHTML="Congratulations! Player-02 (Red) Wins times!";
  }
  else{
    document.getElementById('txtGameOver').innerHTML="It was a draw!";
  }
}
