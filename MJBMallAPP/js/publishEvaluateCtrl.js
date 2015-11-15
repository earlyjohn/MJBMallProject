/**
 * Created by Administrator on 2015/10/29.
 */
/**
 * Created by Administrator on 2015/10/29.
 */
var publishEvaluateCtrl = {
    init: function (e) {

        var query = $$.parseUrlQuery(e.detail.page.url);
        var order_id = query.order_id;
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        var goods_id;
        // ��������
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>发表评价"
            +"</div><div class='right'></div></div>";
        $$('#publishEvaluateNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        var star=0;
        // 根据订单id得到该订单内的商品详情
        uzu.rest.getJSON("orders/findGoodsByOrderId", { 'order_id': order_id }, function (result) {
            // 渲染模板
            var context = {};
            context.orderDetailProductData = result.result.goodsList;
            var editCartsListTemplate = $$('#orderDetailProductListTpl').html();
            var compiledEditCartsListTemplate = Template7.compile(editCartsListTemplate);
            var html = compiledEditCartsListTemplate(context);
            $$('#indreckoning').html(html);
            goods_id = result.result.goodsList[0].goods_id;
        });

        for(var i=0;i<5;i++){
            (function(){
                var p = i;
                document.getElementById("pj_pic"+(p+1)).onclick = function() {
                    getdefault();
                    for(var j=0;j<=p;j++){
                        document.getElementById("pj_pic"+(j+1)).src = "img/pjdj_1.png"
                    }
                    star = p+1;
                    //alert(star);
                }
            })();
        }

        function getdefault(){
            for(var i=0;i<5;i++){
                (function(){
                    var p = i;
                    document.getElementById("pj_pic"+(p+1)).src = "img/pjdj_2.png"
                })();
            }
        }
        document.getElementById("submit").onclick = function(){
            var content = document.getElementById("content").value;
            if(content == "请输入内容"){
                myApp.alert("请输入您要评价的内容", "error");
                return;
            }
            if(star == 0){
                myApp.alert("请输入您要评价的星级", "error");
                return;
            }
            uzu.rest.getJSON("evaluate/addEvaluate",{'user_id':user_id,'goods_id':goods_id,'evaluate_content':content,'star':star},function(){
                myApp.alert("成功，谢谢您的评价！", "success");
                mainView.router.loadPage("order.html");
            });
        }


    }
};

