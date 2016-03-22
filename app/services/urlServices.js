var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7778/urls";

module.exports = {
    createTiny: function (url) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(url),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getUrls: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteUrl: function (url) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + "/" + url._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}
