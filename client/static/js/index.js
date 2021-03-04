helperFuncs = require("./helpers.js");
apiFuncs = require("./api.js")

let callButtons = document.querySelectorAll('button');
    for (let i=0; i < callButtons.length; i++) {
        callButtons[i].addEventListener("click", () => {
            helperFuncs.appendList(apiFuncs.callApi(callButtons[i].name))
        })
    }
