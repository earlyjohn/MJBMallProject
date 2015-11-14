﻿var messageCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"id="pd_detail"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack"></i></div>'+
        '<div class="center">消息 </div><div class="right editCart"><i style="color: #FFFFFF;" class="icon"></i>'+
        '</div></div>';
        $$('#messageNavbar').html(html);
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("msgs/findMsg", {'user_id':user_id}, function (data) {
            if (!data.result.systemMessageList)
                return;
            document.getElementById("date").innerHTML = cutstr(data.result.systemMessageList[0].sendTime,10);
            document.getElementById("content").innerHTML = data.result.systemMessageList[0].msg;
        });
        uzu.rest.getJSON("msgs/findNoReadMsgNum", {'user_id':user_id}, function (data) {
            if (!data.result.noReadNum)
                return;
            document.getElementById("noread").innerHTML = data.result.noReadNum;
        });

        function cutstr(str, len) {
            var str_length = 0;
            var str_len = 0;
            str_cut = new String();
            str_len = str.length;
            for (var i = 0; i < str_len; i++) {
                a = str.charAt(i);
                str_length++;
                if (escape(a).length > 4) {
                    //中文字符的长度经编码之后大于4
                    str_length++;
                }
                str_cut = str_cut.concat(a);
                if (str_length >= len) {
                    str_cut = str_cut.concat("");
                    return str_cut;
                }
            }
            //如果给定字符串小于指定长度，则返回源字符串；
            if (str_length < len) {
                return str;
            }
        }
    }
};

