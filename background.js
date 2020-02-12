
async function handleMessage(request, sender) {
  let sites = await browser.topSites.get();
  let tab = await browser.tabs.query({currentWindow: true, active: true})
  console.log(tab[0])
  console.log(sites);
  return {response: sites, current: tab[0].url}
  
}

browser.runtime.onMessage.addListener(handleMessage);




