function getTranslation() {
    console.log(document.getElementsByClassName("ToWrd")[1].textContent)
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("https://www.wordreference.com/enfr/")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: getTranslation
        });
    }
});