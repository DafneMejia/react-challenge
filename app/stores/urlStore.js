var dispatcher = require("../dispatcher");
var urlServices = require("../services/urlServices");

function UrlStore() {
    var listeners = [];

    function onChange(listener) {
        getUrls(listener);
        listeners.push(listener);
    }

    function getUrls(cb){
        urlServices.getUrls().then(function (res) {
            cb(res);
        });
    }

    function createTiny(url) {
        urlServices.createTiny(url).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteUrl(url) {
        urlServices.deleteUrl(url).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getUrls(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "url") {
            switch (split[1]) {
                case "createTiny":
                    createTiny(payload.url);
                    break;
                case "deleteURL":
                    deleteUrl(payload.url);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = UrlStore();
