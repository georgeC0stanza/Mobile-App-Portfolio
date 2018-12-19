


/******************************************************************************
 * the User class holds the data for each player's decks and win history
 */
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
/******************************************************************************
 * Initializing and setting up the data
 *  and entry point into our code
 */
//function onStart(){
  let gamesList = [0];
  gamesList.pop();

  let userList = [0];
  userList.pop();

  load()
//} 


/******************************************************************************
 * File IO functions
 * reading and writing our data to local storage
 */

function load(){
  // load gamesList
  if (localStorage.hasOwnProperty("gamesList")){
    if (localStorage.getItem("gamesList")){
      gamesList = JSON.parse(localStorage.getItem("gamesList"));
    }
  }

  // load our userList
  if (localStorage.hasOwnProperty("userList")){
    if (localStorage.getItem("userList"))
    {
      userList = JSON.parse(localStorage.getItem("userList"));
    }
  }
}

function save(){
  localStorage.setItem("gamesList", JSON.stringify(gamesList));
  localStorage.setItem("userList", JSON.stringify(userList));
}

/******************************************************************************
 * addNewPlayer adds a new user to the userlist
 */
function addNewPlayer(){
  let newUser = new User(document.getElementById('player_name').value);
  userList.push(newUser); 

  document.getElementById('message').innerHTML = `<p style="color:green;">Successful entry!</p>`;
  save();
  return false;
}

/******************************************************************************
 * addNewDeck adds a new deck to a specific player
 */
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

/******************************************************************************
 * setUsers will set input value to a given value
 */
function setUsers(userLocation, value){
  document.getElementById(userLocation).value = value;
}

/******************************************************************************
 * loadUsaers will load the users form userlist and display them in a given location
 */
function loadUsers(userLocation, usersLocation){
  var dropdown = `
    <div class="dropdown-content">
  `;

  var numOfUsers = userList.length;
  for (var i = 0; i < numOfUsers; ++i){
    dropdown += `<button type="button" onclick="setUsers('${userLocation}', '${userList[i].name}')">${userList[i].name}</button>`
  }
  dropdown += `</div>`;

  document.getElementById(usersLocation).innerHTML = dropdown;
}

/******************************************************************************
 * setDecks will set input value to a given value
 */
function setDecks(deckLocation, value){  
  document.getElementById(deckLocation).value = value;
}

/******************************************************************************
 * loadDecks will load the users form userlist and display them in a given location
 */
function loadDecks(username, deckID, spanID){
  var dropdown = `
    <div class="dropdown-content">
  `;

  let numOfUsers = userList.length;
  for (var i = 0; i < numOfUsers; ++i){
    if (userList[i].name == document.getElementById(username).value){
      let numOfDecks = userList[i].decks.length;
      for (var j = 0; j < numOfDecks; ++j){
        dropdown += `<button type="button" onclick="setDecks('${deckID}', '${userList[i].decks[j]}')">${userList[i].decks[j]}</button>`
      }
    }
  }
  dropdown += `</div>`;

  document.getElementById(spanID).innerHTML = dropdown;
}

/******************************************************************************
 * addNewBattle will add a new battle to the gameslist
 */
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
  gamesList.unshift(game);
  document.getElementById('message').innerHTML = `<p style="color:green;">Successful entry!</p>`;
  save();
  return false;
}

/******************************************************************************
 * updateDeckVersion will save the new deck version
 */
function updateDeckVersion(){

  save();
}



/******************************************************************************
 * "navigation" functions
 * modifying the page dynamically to display the relevant information
 * to the user.
 */

function getFragment(htmlFragment) {
  fetch(htmlFragment)
  .then(function(response) {
    return response.text();
  })
  .then(function(htmlFragment) {
    document.getElementById('fragmentSpace').innerHTML = htmlFragment;
  });
}

function newplayer() {
  var htmlFragment = "newplayer.html";
  getFragment(htmlFragment);
}

function newbattle() {
  var htmlFragment = "newbattle.html";
  getFragment(htmlFragment);
}

function newdeck() {
  var htmlFragment = "newdeck.html";
  getFragment(htmlFragment);
}

function display() {
  updateDisplay();
}


/******************************************************************************
 * "display" functions 
 * displaying the results to the user
 */

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
  let list = "<h2>Player 1</h2><br/><table border = '1'><tr><th>Player 1</th><th>Deck</th><th>Player 2</th><th>Deck</th><th>Victor</th></tr>\n";

  for (game of gamesList) {
    list += "<tr>";
    for (item of game) {
      list += "<td>" + item + "</td>";
    }
  }
  document.getElementById('resultsTable').innerHTML = list;


}

 
