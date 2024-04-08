// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     if (message.prompt) {
//       const searchInput = document.querySelector('#prompt-textarea'); // Replace "q" with the name attribute of the search bar input element on the website you want to target.
//       if (searchInput) {
//         searchInput.value = message.prompt;
//       }
//     }
//   });

// var style = document.createElement("style");
// style.textContent = ".browser-action { display: none !important; }";
// document.documentElement.appendChild(style);
  

// chrome.runtime.onMessage.addListener(function (message) {
//   if (message.action === "open_new_tab") {
//     chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
//   }
// });

chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === "open_new_tab") {
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
  }
});