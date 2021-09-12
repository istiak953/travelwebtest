

function checkCookiesStats(name) {

 if(navigator.cookieEnabled) {


   document.cookie = "asdd";
   var cookie = true;
     return cookie;
  }

  else {
  var cookie = false;
  return cookie;

  }

}

function myFunction(n) {
  location.replace("http://localhost:7357/#/")
}
const userAction = async () => {
  const response = await fetch('http://localhost:8000/afterlogcheck/');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}