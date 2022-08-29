chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.translation)
        sendResponse(request.translation)
    }
)
