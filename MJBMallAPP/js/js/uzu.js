var uzu = {};
uzu.rest = {};
uzu.rest.serviceUrl = "http://115.28.204.151:8088/MJBMall";
//uzu.rest.serviceUrl = "http://localhost:8088/MJBMall";
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
            alert("后台服务无法访问！！！");
        }
    });
};
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
        async: false,
        data:JSON.stringify(params),
        contentType: 'application/json',
        dataType: "json",
        success: function (data) {
            callback(data);
        },
        error: function (e) {
            alert("后台服务无法访问！！！");
        }
    });
};
// 判断是否登录
uzu.rest.isLogin = function () {
    var userId = window.localStorage.getItem("userId");
    if (userId) {
        return true;
    } else {
    	alert("请登录！");
        $$('#homeToolbar').hide();
        mainView.router.loadPage("loginSelectBox.html");
    }
};

// 清空缓存
uzu.rest.removeMemeryCatch = function () {
    var storage = window.localStorage;
    for (var i = 0; i < storage.length; i++) {
        var a = storage.key(i);
        if (storage.key(i) != "userId") {
            storage.removeItem(storage.key(i));
        }
    }
};

