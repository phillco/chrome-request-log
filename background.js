chrome.webNavigation['onDOMContentLoaded'].addListener(async (evt) => {
  try {
    const data = {
      url: evt.url,
      ts: evt.timeStamp,
      // evt,
    };
    const tab = await chrome.tabs.get(evt.tabId);
    // data.tab = tab;
    if (tab.openerTabId) {
      const openerTab = await chrome.tabs.get(tab.openerTabId);
      // data.referrer = openerTab.url;
      // data.openerTab = openerTab;
    }
    const resp = await fetch("http://0.0.0.0:7445", {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
    });
  } catch (e) {

  }
});
