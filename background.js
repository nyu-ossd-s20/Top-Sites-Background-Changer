/*
Function gets top sites from API and returns it to the main script
*/
async function handleMessage(request, sender) {
  //Get top sites 
  let sites = await browser.topSites.get();
  let tab = await browser.tabs.query({currentWindow: true, active: true})
  //Debugging
  console.log(tab[0])
  console.log(sites);
  //Send to main script with current tab 
  return {response: sites, current: tab[0].url}
  
}
//Call main script
browser.runtime.onMessage.addListener(handleMessage);




