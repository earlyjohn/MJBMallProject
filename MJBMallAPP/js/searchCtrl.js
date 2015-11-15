var searchCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner home_float'><div class='left'><i class='iconBack'></i></div>"
             + "<div class='center home_back'>" + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<span class='selectSearch1'>商品</span>"
             + "<input class='u_input' id='u465_input' type='text'  class='text_sketch' />"
             + "</div><div class='right'><i class='icon home_search'></i></div></div>";
        $$('#searchNavbar').html(html);
        var searchTypeContainer = $$.parseUrlQuery(e.detail.page.url) || [];
        var searchType = searchTypeContainer.searchType;
        if (searchType == 0) {
            $$(".selectSearch1").text("商品");
        } else {
            $$(".selectSearch1").text("店铺");
        }
        // 回退
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        //清空历史记录
        $$("#clear").on('click', function () {
            window.localStorage.removeItem(user_id);
        
        });

        var html1 = "";
        var searchContent = $$('.u_input').val();
        var user_id = window.localStorage.getItem("userId");


        initpage();

        // 历史记录
        function initpage(){
            userhistory = window.localStorage.getItem(user_id);
            if (userhistory != undefined) {
                var a = userhistory.split(",", 10);
                if (a != undefined) {
                    for (var i = 0; i < a.length; ++i){
                        var child = document.createElement("div");
                        child.className = "search_second";
                        child.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+a[i]+"<hr class='' />";
                        document.getElementById("pwf").appendChild(child);
                    }
                }
            }
        }

        $$('.home_search').on('click', function () {
            var searchContent = $$('.u_input').val();
            document.getElementById("pwf").innerHTML = "";
            var child = document.createElement("div");
            child.className = "search_second";
            child.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+searchContent+"<hr class='' />";
            document.getElementById("pwf").appendChild(child);
            initpage();
            if (searchType == 0) {
                if (searchContent) {
                    if (userhistory != undefined) {
                        var a = userhistory.split(",", 10);
                        for (var i = 0; i < a.length; ++i) {
                            if (a[i] == searchContent)
                                a.splice(i, 1);
                        }
                        a.unshift(searchContent.toString());
                        window.localStorage.setItem(user_id, a);
                    }
                    else {
                        userhistory = new Array();
                        userhistory.unshift(searchContent.toString());
                        window.localStorage.setItem(user_id, userhistory);
                    }
                }
                mainView.router.loadPage("productsList.html?name=" + searchContent);
            } else {
                if (searchContent) {
                    if (userhistory != undefined) {
                        var a = userhistory.split(",", 10);
                        for (var i = 0; i < a.length; ++i) {
                            if (a[i] == searchContent)
                                a.splice(i, 1);
                        }
                        a.unshift(searchContent.toString());
                        window.localStorage.setItem(user_id, a);
                    }
                    else {
                        userhistory = new Array();
                        userhistory.unshift(searchContent.toString());
                        window.localStorage.setItem(user_id, userhistory);
                    }
                }
                mainView.router.loadPage("shopList.html?shop_name=" + searchContent);
            }

        });

    }
};

