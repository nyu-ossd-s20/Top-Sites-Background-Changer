let color = ""
function handleResponse(message) {
    let urls = []
    console.log(message.current)
    for (site of message.response) {
        const u = site.url
        if (u.includes('www')) {
            const idx = u.indexOf('www')
            urls.push(u.slice(idx+4))

        }
        else {
            const idx = u.indexOf('://')
            urls.push(u.slice(idx+3))
       
        }
    }
    console.log(urls)
    let currentURL = message.current
    if (currentURL.includes('www')) {
        const idx = currentURL.indexOf('www')
        currentURL = currentURL.slice(idx+4)

    }
    else {
        const idx = currentURL.indexOf('://')
        currentURL = currentURL.slice(idx+3)
    }
    console.log(currentURL)

    if (urls.includes(currentURL)) {
        // change to processing the user chosen colour
        // console.log(color)
        document.body.style.backgroundColor = color
        console.log("Site in top sites")
    }
    else {
        // change to processing the user chosen colour
        console.log("Not in top sites")


    }

}
  
function handleError(error) {
    console.log(`Error: ${error}`);
}
  
function sendMessage(e) {
    console.log(e)
    color = e
    const sending = browser.runtime.sendMessage({content: "request for topSites"});
    sending.then(handleResponse, handleError);  
}
  
// window.addEventListener('click', sendMessage);
// sendMessage()
// document.getElementById('red').addEventListener('click', sendMessage);