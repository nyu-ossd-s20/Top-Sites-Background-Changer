
async function handleMessage(request, sender) {
  let sites = await browser.topSites.get();

  console.log(sites);
  return {response: sites}
  // sendResponse({response: [sites]});
  
}

browser.runtime.onMessage.addListener(handleMessage);




