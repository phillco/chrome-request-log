["onBeforeNavigate", "onDOMContentLoaded"].forEach(ev => {
  chrome.webNavigation[ev].addListener(async (evt) => {
    try {
      const data = {
        eventName: ev,
        url: evt.url,
        ts: evt.timeStamp,
        evt,
      };
      const tab = await chrome.tabs.get(evt.tabId);
      data.tab = tab;
      if (tab.openerTabId) {
        const openerTab = await chrome.tabs.get(tab.openerTabId);
        data.openerTab = openerTab;
      }
      const resp = await fetch("http://0.0.0.0:7445", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
      });
    } catch (e) {

    }
  });
});
