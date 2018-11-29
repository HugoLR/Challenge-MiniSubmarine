/**
*
* The company Nav-G, Ltd., has decided to develop a prototype of the minisubmarine game,
* for this the development team has the following requirements:
*
* - It's neccesary to have a function that executes an event in the DOM to start the game.
* - It is necessary to have a function that starts the game, which will have two nested
*   functions:
*
* - A function to detect DOM event for every cell board.
* - A function for matching values of player with submarines positions.
*
* - It's neccesary to have a function to generate positions of two submarines for destroying them.
* - It's neccesary to have a function for getting destroyed submarines or winner. This
*   function will show score of submarines destroyed and in case of destroying the
*   two submarines, it will show the message 'winner'.
* - It's neccesary to have a function to generate dinamically the board.
*
*
* For these requirements, the team has already considered a code structure that must be followed.
*
**/

/***code goes here****/


//startGame function
function startGame() {
  //variable with positions of submarines for destroying them
  var coordenadas = randomCell()
  console.log(coordenadas);
  //eventClick function to detect DOM event for every cell board
  document.querySelector('#container').addEventListener("click", eventClick)

  //eventClick function
  function eventClick(submarinePositions) {

    //What should go here to detect DOM event for every cell board?
        var event = submarinePositions.target;
        console.log(submarinePositions.target)
        //What should go here for matching values of player with submarines positions?
        if (event.getAttribute('id') === coordenadas[0] || event.getAttribute('id') === coordenadas[1] ) {
          event.style.backgroundColor = "red";
        } else {
          event.innerHTML = "X"
        }
  }

  //matcher function
  function matcher(playerValue, subValue) {
    //What conditional should go here to alert 'Game Over'?

    //What conditional should go here for matching values of player with submarines positions
    //and show 'red' cells and 'X' cells?

    //What should go here for getting destroyed submarines or winner?

  }
}

//score function
function score(value) {
  if (value <= 2){
    //What should go here to show the number of submarines destroyed?

  }
  if (value == 2){
    //What should go here to show if the player is a winner?

  }
}

//board function
var board = function() {
  //What should go here to dynamically show the board cells?
  // var tableBoard = document.createElement("div")
    for(var i = 0; i < 9; i++) {
      var box = '<div class="cell" id= c' + i + '></div>'
      document.querySelector('#container').innerHTML += box
    }
}

//function to generate positions of two submarines
var randomCell = function() {

  //call board function to generate dinamically board
  board()
  //get positions of two submarines

  var randomPositionSub = function(num1, num2){
    var randomDecimalNum = Math.random()
    var range = num2 - num1 + 1
    return num1 + Math.floor(randomDecimalNum * range)
  }

  var subOne = randomPositionSub(0,8)
  var subTwo = randomPositionSub(0,8)

  var valueSubOne = "c" + subOne;
  // console.log(valueSubOne)
  var valueSubTwo = "c" + subTwo;
  // console.log(valueSubTwo)
  return [valueSubOne, valueSubTwo]
}


//function to execute DOM event for starting game
function executeGame() {
  document.querySelector('#play').addEventListener('click',function(){
    startGame()
  })
}


executeGame();
