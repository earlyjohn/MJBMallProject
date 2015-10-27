var uzu = {};
uzu.rest = {};
uzu.rest.serviceUrl = "http://115.28.204.151:8088/MJBMall";
uzu.rest.getUrl = function (url, params) {
    var serviceUrl = uzu.rest.serviceUrl;
    if (!url) {
        return;
    }
    var newUrl = serviceUrl + "/" + url;
    if (!params) {
        return newUrl + "?callback=";
    } 
    var queryStr = [];
    for (var name in params)
        queryStr.push(name + "=" + params[name]);    
    if (queryStr.length === 0) {
        return newUrl + "?callback=";
    }
    return newUrl.indexOf("?") >= 0 ? (newUrl + "&" + queryStr.join("&") + "&callback=") : (newUrl + "?" + queryStr.join("&") + "&callback=");
};
uzu.rest.getJSON = function (url, params, callback) {
    if (!url) return;
    if (arguments.length === 2 && typeof params === 'function') {
        callback = params;
        params = null;
    }
    var url = this.getUrl(url, params);
    debugger;
    $$.ajax({
        method: "GET",
        async: false,
        url: url,
        contentType: 'application/json',
        dataType: "json",
        success: function (data) {
            callback(data);
        },
        error: function (e) {
            alert("error");
        }
    });
};
//$$.ajax({
//    url: url,
//    method: 'POST',
//    data:JSON.stringify(params),
//    contentType: 'application/json',
//    success: function (data) {
//        callback(data);
//    },
uzu.rest.postData = function (url, params, callback) {
    if (!url) return;
    if (arguments.length === 2 && typeof params === 'function') {
        callback = params;
        params = null;
    }
    var url = this.getUrl(url);
    $$.ajax({
        url: url,
        method: 'POST',
        data:JSON.stringify(params),
        contentType: 'application/json',
        success: function (data) {
            callback(data);
        },
        error: function (xhr, status) { }
    });
};
