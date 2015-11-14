var activityMessageCtrl = {
    init: function (e) {

        // ��������
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a>'+
       '<div class="center">美居宝活动消息</div><div class="right editCart"><a class="link link-u" style="color: white"></a></div></div>';
        $$('#activityMessageNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        //获取用户ID
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("msgs/findMsg", {'user_id':user_id}, function (data) {
            if (!data.result.systemMessageList)
                return;
            var lists = document.getElementById("listcontent");
            for(var i=0;i<data.result.systemMessageList.length;i++){
                var date = document.createElement("div");
                var content = document.createElement("div")
                date.innerHTML = cutstr(data.result.systemMessageList[i].sendTime,10);
                content.innerHTML = data.result.systemMessageList[i].msg;
                content.className = "content-block"
                content.style.backgroundColor = "#ffffff"
                lists.appendChild(date);
                lists.appendChild(content);
            }
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

/**
 * Created by Administrator on 2015/10/28.
 */
