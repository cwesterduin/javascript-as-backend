(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function callApi(route){
    try {
        const url = `https://localhost:3000/${route}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data;
    } catch (err) {
        console.log(err)
    }
};

module.exports = { callApi }
},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
helperFuncs = require("./helpers.js");
apiFuncs = require("./api.js")

apiFuncs.callApi('cats')
},{"./api.js":1,"./helpers.js":2}]},{},[3]);
