function startEventLoop() {  //function declaration
  logMessage("Start of the script");

  //Asynchronous task using setTimeout function
  setTimeout(function() {  //setTimeout is a Web API function that allows you to execute a callback function after a specified delay
    logMessage("Inside setTimeout callback");
  }, 500);

//Asynchronous task using Promise.then()
  Promise.resolve().then(function() {  
    //Promise.resolve() creates a resolved Promise immediately. The then method is used to attach a callback function to be executed when the Promise is resolved.
    logMessage("Inside Promise.then callback");
  });

  logMessage("End of the script");
}

// Function to log messages to the HTML output
function logMessage(message) { 
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p> ${message}</p>`;
}

