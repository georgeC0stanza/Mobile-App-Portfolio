// makes an AJAX request for the html file found at viewPath and returns it as text
function getView(viewPath) {
  return fetch(viewPath)
    .then(response => {
      return response.text();
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
}

// using async/await
async function getViewAsync(viewPath) {
  try {
    const response = await fetch(viewPath);
    const text = await response.text();
    debugger;
    return text;
  } catch (err) {
    console.log('Something went wrong', err);
  }
}
var htmlFragment = "newplayer.html";

function get(htmlFragment) {
    return fetch(htmlFragment).then(response => {return response.text();}).catch(err => {console.log("error", err);});
}

//console.log(get());
/*
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
*/
  fetch(htmlFragment)
  .then(function(response) {
    return response.text();
  })
  .then(function(myJson) {
    document.getElementById('fragmentSpace').innerHTML = myJson;
  });
