var winner = "Michael";

function display(winner){
  document.getElementById("display").innerHTML = 
  `
  hello there ${winner}
  
  
  
  
  
  `;
}










































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