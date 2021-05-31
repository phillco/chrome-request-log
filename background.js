chrome.webNavigation['onDOMContentLoaded'].addListener(async (evt) => {
  const resp = await fetch("http://0.0.0.0:7445", {
    mode: 'no-cors',
    body: JSON.stringify({
      url: evt.url,
      ts: evt.timeStamp,
    }),
  });
});