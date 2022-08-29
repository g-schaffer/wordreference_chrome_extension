function getTranslation() {
    return document.getElementsByClassName("ToWrd")[1].textContent
}

chrome.runtime.sendMessage({translation: getTranslation()}, function(response) {
    console.log("translation : " + getTranslation());
    console.log("response : " + response);
});
