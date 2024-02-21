function startEventLoop() {  //function declaration
  logMessage("Start of the script");

  //Asynchronous task using setTimeout function
  setTimeout(function() {
    logMessage("Inside setTimeout callback");
  }, 500);

//Asynchronous task using Promise.then()
  Promise.resolve().then(function() {
    logMessage("Inside Promise.then callback");
  });

  logMessage("End of the script");
}

function logMessage(message) { 
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p> ${message}</p>`;
}

