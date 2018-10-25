
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
  
console.log(userList);
console.log("gamesList:");
console.log(gamesList);

//} 

function save(){
  localStorage.setItem("gamesList", JSON.stringify(gamesList));
  localStorage.setItem("userList", JSON.stringify(userList));
}

function addNewPlayer(){
  let newUser = new User(document.getElementById('player_name').value);
  userList.push(newUser); 
  console.log(userList);
  return false;
}

function addNewDeck(){
  console.log(userList);
  let playerName = document.getElementById('player_name2').value;
  let newDeck = document.getElementById('deck_name').value;
  console.log(userList);
  let userListIndex = userList.findIndex(user => user.name === playerName);
  console.log(userListIndex);
  console.log(userList);
  userList[userListIndex].decks.push(newDeck);
  console.log(userList);
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
  return false;
}

function updateDeckVersion(){

}

function updateDisplay(){

  console.log(gamesList);
  let list = "<table border = '1'><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>\n";

  for (game of gamesList) {
    for (item of game) {
      list += "<tr><td>" +
    }
  }

  for (let i = 0; i < gamesList.length; i++){
    for (let j = 0; j < gamesList[i].length; j++){
      list  = list + "<tr><td>" + gamesList[i].[j] + " " + myObj.students[i].last + "</td>" +
              "<td>" + myObj.students[i].address.city + ", " + myObj.students[i].address.state + " " +
              myObj.students[i].address.zip + "</td>" +
              "<td>" + myObj.students[i].major + "</td>" +
              "<td>" + myObj.students[i].gpa + "</td></tr>\n";
    }
  }
  document.getElementById("json2").innerHTML = list;

  // from another thing:
  var myObj = JSON.parse(this.responseText);
  var list = "<table border = '1'><tr><th>Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>\n";

  for (var i = 0; i < myObj.students.length; i++){
      list  = list + "<tr><td>" + myObj.students[i].first + " " + myObj.students[i].last + "</td>" +
              "<td>" + myObj.students[i].address.city + ", " + myObj.students[i].address.state + " " +
              myObj.students[i].address.zip + "</td>" +
              "<td>" + myObj.students[i].major + "</td>" +
              "<td>" + myObj.students[i].gpa + "</td></tr>\n";
  }
  document.getElementById("json2").innerHTML = list;
}

/* tests
var winner = "Michael";

function display(winner){
  document.getElementById("display").innerHTML = 
  `
  hello there ${winner}
  
  `;
}
*/

//testings
/*
function addUser(name) {
  let newUser = new User(name);
  newUser.addDeck("deckName", "version 3");
  
  newUser.listDecks();

  console.log ("success!")
}

function addGame(game) {
  
  gamesList.newGame("jack", "danielle", "sudo", "cleanser", "1");
  gamesList.listGames();
}

*/

