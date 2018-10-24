/* deprecated
class GamesList {
  constructor() {
    this.games = ["0"];
    this.games.pop();
    this.counter = 0;
  }

  newGame(player1, player2, deck1, deck2, result){
    let game = [player1, player2, deck1, deck2, result];
     this.games.push(game);
  }
  listGames(){
    console.log(this.games.toString());
  }
 
}
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
//8**************************************************************************
  // Retrieve your data from locaStorage
  var saveData = JSON.parse(localStorage.saveData || null) || {};

  // Store your data.
  function saveStuff(obj) {
    saveData.obj = obj;
    // saveData.foo = foo;
    saveData.time = new Date().getTime();
    localStorage.saveData = JSON.stringify(saveData);
  }

  // Do something with your data.
  function loadStuff() {
    return saveData.obj || "default";
  }
//8*******************************************************************************


//function onstart(){

  let gamesList = [0];
  gamesList.pop();
  if (localStorage.hasOwnProperty("gamesList")){
    if (localStorage.getItem("gamesList"))
      gamesList = JSON.parse(localStorage.getItem("gamesList"));
  }

  let userList = [0];
  userList.pop();
  if (localStorage.hasOwnProperty("userList")){
    if (localStorage.getItem("userList"))
      console.log(localStorage.getItem("userList"));
    userList = JSON.parse(localStorage.getItem("userList"));
  }
  
console.log(userList);
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

/* need some fixing done */
function addNewDeck(){
  console.log(userList);
  let playerName = document.getElementById('player_name2').value;
  let newDeck = document.getElementById('deck_name').value;
  console.log(userList);
  let userListIndex = userList.findIndex(name => name === "sam"); // playerName);
  console.log(userListIndex);
  console.log(userList);
 // userList[userListIndex].decks.push(newDeck);
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
}

function updateDeckVersion(){

}

var winner = "Michael";

function display(winner){
  document.getElementById("display").innerHTML = 
  `
  hello there ${winner}
  
  `;
}


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


var phoneValidation = false;
var ccnValidation = false;
var expValidation = false;
var totalCost = 0;




function validateForm(){
  console.log("entered");
  console.log("phoneValidation");
  console.log(phoneValidation);
  console.log("ccnValidation");
  console.log(ccnValidation);
  console.log("expValidation");
  console.log(expValidation);

  if (phoneValidation == true) {
      return true;
  }
  if (ccnValidation == true) {
    return true;
  }
  if (expValidation == true) {
    return true;
  }
  if (totalCost > 0) {
    return true;
  }
 
}



function validate_phone(number, validationPath){
  if (number != ''){
    if (number.match(/^\d{3}-\d{3}-\d{4}$/)){
      document.getElementsByName(validationPath)[0].textContent = "";
      phoneValidation = true;
    } else {
      document.getElementsByName(validationPath)[0].textContent = "Invalid phone number";
      phoneValidation = false;
    }
  } else {
    document.getElementsByName(validationPath)[0].textContent = "";
    phoneValidation = true;
  }
}

function validate_ccn(ccn, validationPath){
  // check for empty string
  if (ccn !== ''){
    // remove spaces
    ccn = ccn.replace(/\s+/g, '');

    // check if number
    if (isNaN(ccn) === false){
      // check if number is correct length
      if (ccn.length == 16){
          document.getElementsByName(validationPath)[0].textContent = "";
          ccnValidation = true;
      } else {
          document.getElementsByName(validationPath)[0].textContent = "Invalid credit card number";
          ccnValidation = false;    
      }
    } else {
        document.getElementsByName(validationPath)[0].textContent = "Invalid credit card number";
        ccnValidation = false;
    }
  } else {
    document.getElementsByName(validationPath)[0].textContent = "";
    ccnValidation = true;
  }

}

function validate_exp(date, validationPath){
  //seperate
  if (date !== ''){
    var str, matches, index, num0, num1;
    var num = [num0, num1]
    // split into pieces
    matches = date.match(/\d+/g);
    for (index = 0; index < matches.length; ++index) {
        num[index] = parseInt(matches[index], 10);
    }
    // now we are going to say if it is valid or not
    if (num[0] >= 1 && num[0] <= 12){
      if (num[1] >= 2018){
          document.getElementsByName(validationPath)[0].textContent = "";
          expValidation = true;
      } else {
          document.getElementsByName(validationPath)[0].textContent = "Invalid expiration date";
          expValidation = false;
      }

    } else {
        document.getElementsByName(validationPath)[0].textContent = "Invalid expiration date";
        expValidation = false;
    }
  } else {
     document.getElementsByName(validationPath)[0].textContent = "";
     expValidation = true;
  }

}


function calculate_cost(){

  var cost = 0;

  if (document.getElementById("bananas").checked == true){
    cost += 6;
  }
  if (document.getElementById("chocolate").checked == true){
    cost += 2;
  }
  if (document.getElementById("water").checked == true){
    cost += 1;
  }
  if (document.getElementById("bread").checked == true){
    cost += 2;
  }
  if (document.getElementById("apples").checked == true){
    cost += 5;
  }
  document.getElementsByName("costTotal")[0].value = cost;
}