function handleResponse(message) {
    
    console.log(message.response);
}
  
function handleError(error) {
    console.log(`Error: ${error}`);
}
  
function sendMessage(e) {
    const sending = browser.runtime.sendMessage({content: "request for topSites"});
    sending.then(handleResponse, handleError);  
}
  
window.addEventListener('click', sendMessage);