
class User {
  constructor(name) {
    this.name = name;
    this.decks = ["0"]; // we need to convince javascript that this is an array
    this.decks.pop();   // but we need the array to be empty 
    this.winRatio = 0;
  }

  addDeck(name, version) {
    let deck = [name, version];
    this.decks.push(deck);
  }
  
  listDecks() {
    console.log(this.decks.toString());
  }
}



//function onstart(){

  let gamesList = [0];
  gamesList.pop();
  if (localStorage.hasOwnProperty("gamesList")){
    if (localStorage.getItem("gamesList")){
      console.log(localStorage.getItem("gamesList"));
      gamesList = JSON.parse(localStorage.getItem("gamesList"));
      console.log(localStorage.getItem("gamesList"));
    }
  }

  let userList = [0];
  userList.pop();
  if (localStorage.hasOwnProperty("userList")){
    if (localStorage.getItem("userList"))
    {
      console.log(localStorage.getItem("userList"));
      userList = JSON.parse(localStorage.getItem("userList"));
    }
  }


//} 

function save(){
  localStorage.setItem("gamesList", JSON.stringify(gamesList));
  localStorage.setItem("userList", JSON.stringify(userList));
}

function addNewPlayer(){
  let newUser = new User(document.getElementById('player_name').value);
  userList.push(newUser); 

  document.getElementById('message').innerHTML = `<p style="color:green;">Successful entry!</p>`;
  save();
  return false;
}

function addNewDeck(){

  let playerName = document.getElementById('player_name2').value;
  let newDeck = document.getElementById('deck_name').value;

  let userListIndex = userList.findIndex(user => user.name === playerName);

  if (userListIndex == -1){
    document.getElementById('message').innerHTML = `<p style="color:red;">Sorry we do not have that player registered.</p?`;
  }
  else {
    userList[userListIndex].decks.push(newDeck);
    document.getElementById('message').innerHTML = `<p style="color:green;">Successful entry!</p>`;
  }

  save();
  return false;
}

function addNewBattle(){
  let player1 = document.getElementById('player_1').value;
  let player2 = document.getElementById('player_2').value; 
  let deck1 = document.getElementById('deck_1').value;
  let deck2 = document.getElementById('deck_2').value;  
  let result;
  if (document.getElementById('player_1').checked) {
    result = document.getElementById('player_1').value;
  } else {
    result = document.getElementById('player_2').value;
  }

  let game = [player1, player2, deck1, deck2, result];
  gamesList.push(game);
  document.getElementById('message').innerHTML = `<p style="color:green;">Successful entry!</p>`;
  save();
  return false;
}

function updateDeckVersion(){

  save();
}

function updateDisplay(){
  let list = "<table border = '1'><tr><th>Player 1</th><th>Deck</th><th>Player 2</th><th>Deck</th><th>Victor</th></tr>\n";

  for (game of gamesList) {
    list += "<tr>";
    for (item of game) {
      list += "<td>" + item + "</td>";
    }
  }
  document.getElementById('resultsTable').innerHTML = list;
}

function updateDisplay2(){

  console.log(gamesList);
  let list = "<h2>Player 1</h2><br/><table border = '1'><tr><th>Player 1</th><th>Deck</th><th>Player 2</th><th>Deck</th><th>Victor</th></tr>\n";

  for (game of gamesList) {
    list += "<tr>";
    for (item of game) {
      list += "<td>" + item + "</td>";
    }
  }
  console.log(list);
  document.getElementById('resultsTable').innerHTML = list;


}



