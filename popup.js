const button = document.getElementById("convertBtn");
const statusText = document.getElementById("statusText");

button.addEventListener("click", () => {
  button.disabled = true;
  button.textContent = "Converting...";
  statusText.textContent = "Please wait";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    chrome.scripting.insertCSS({
      target: { tabId: tabs[0].id },
      files: ["content.css"]
    });

    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        let title = document.title || "webpage";
        title = title.replace(/[^\w\s]/gi, "").replace(/\s+/g, "_");

        const originalTitle = document.title;
        document.title = title;

        window.print();

        setTimeout(() => {
          document.title = originalTitle;
        }, 1000);
      }
    });

    // Reset UI after short delay
    setTimeout(() => {
      button.disabled = false;
      button.textContent = "Convert to PDF";
      statusText.textContent = "";
    }, 2000);
  });
});
