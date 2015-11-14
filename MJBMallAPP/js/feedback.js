/**
 * Created by Administrator on 2015/10/29.
 */
/**
 * Created by Administrator on 2015/10/29.
 */
var feedbackCtrl = {
    init: function (e) {
        // ��������
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>意见反馈"
            +"</div><div class='right'></div></div>";
        $$('#feedbackNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        document.getElementById("submit").onclick = function(){
            var user_id = window.localStorage.getItem("userId");
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
            var content = document.getElementById("content").value;
            if(content == "请输入内容"){
                myApp.alert("请输入您要反馈的内容", "error")
                return;
            }
            //alert(user_id + currentdate +content);
            uzu.rest.getJSON("/members/addFeedBack", { 'member_id':user_id, 'date':currentdate, 'content':content }, function (data) {

                if (data.result.msg == "success") {

                    mainView.router.loadPage("personalCenter.html");
                }else{
                    myApp.alert("网路连接错误", "error")
                    return;
                }

            });
        }
    }
};

