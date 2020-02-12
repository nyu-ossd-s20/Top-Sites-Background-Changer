//Clicked color
let color = ""
function handleResponse(message) {
    let urls = []
    console.log(message.current)
    //get current site
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
    //Check to see if you are on a top site 
    if (urls.includes(currentURL)) {
        // change to processing the user chosen colour
        console.log(color)
        // document.body.style.backgroundColor = color
        if (color == 'red') {
            browser.tabs.insertCSS({
                code: `body {
                    border-style: solid;
                    border-width: 30px;
                    border-color: red;
                  }`
                    
                
            })
        }
        //coded for each color because the CSS needs to not be given a variable 
        else if (color == 'blue') {
            browser.tabs.insertCSS({
                code: `body {
                    border-style: solid;
                    border-width: 30px;
                    border-color: blue;
                  }`
                    
                
            })

        }

        else if (color == 'green') {
            browser.tabs.insertCSS({
                code: `body {
                    border-style: solid;
                    border-width: 30px;
                    border-color: green;
                  }`
                    
                
            })

        }
        //Do it again
        else{
            browser.tabs.insertCSS({
                code: `body {
                    border-style: solid;
                    border-width: 0px;
                  }`
                    
                
            })

        }

        //Debug
        console.log("Site in top sites")
    }
    else {
        // change to processing the user chosen colour
        console.log("Not in top sites")


    }

}
//General error handling
function handleError(error) {
    console.log(`Error: ${error}`);
}
//Get top sites 
function sendMessage(e) {
    console.log(e)
    color = e
    const sending = browser.runtime.sendMessage({content: "request for topSites"});
    sending.then(handleResponse, handleError);  
}
  
// window.addEventListener('click', sendMessage);
// sendMessage()
// document.getElementById('red').addEventListener('click', sendMessage);
