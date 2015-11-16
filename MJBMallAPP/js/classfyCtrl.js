var classfyCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
                + "</div><div class='center'>分类</div><div class='right'><i class='icon'></i></div></div>";
        $$('#classfyNavbar').html(html);
        // 回退
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.loadPage("home.html");
        });

        //获取用户ID
        var user_id = window.localStorage.getItem("userId");

        initUserChoose();


        //加载所有的根分类
        uzu.rest.getJSON("goods/findClassify",{},function(data){
            if(!data.classifyList)
                return;
            for(var i=0;i < data.classifyList.length;i++){
                var childdiv = document.createElement("div");
                var img = document.createElement("img");
                var div = document.getElementById("all_hyfl");
                childdiv.className = "home_hyfl";
                img.src = data.classifyList[i].iconUrl;
                (function(){
                    var p = i
                    img.onclick = function() {
                       uzu.rest.getJSON("goods/addUserGoodsClassify",{'user_id':user_id,'cat_id':data.classifyList[p].cat_id},function(){
                        initUserChoose();
                       });
                    }
                })();
                childdiv.appendChild(img);
                div.appendChild(childdiv);
            }
        });

        //初始化用户选择的分类
        function initUserChoose(){
            uzu.rest.getJSON("goods/findUserGoodsClassify",{'user_id':user_id},function(data){
                if(!data.classifyList)
                    return;
                if(data.userChoose.length == 0){
                    if(data.classifyList.length<9){
                        for(var i=0;i<data.classifyList.length;i++){
                            if(data.classifyList[i].iconUrl == null){
                                document.getElementById("edit_hyfl_pic"+(i+1)).src = "img/msg-pay.png";
                            }else{
                                document.getElementById("edit_hyfl_pic"+(i+1)).src = data.classifyList[i].iconUrl;
                            }
                            (function(){
                                var p = i
                                document.getElementById("edit_hyfl_pic"+(i+1)).onclick = function() {
                                    uzu.rest.getJSON("goods/addUserGoodsClassify",{'user_id':user_id,'cat_id':data.classifyList[p].cat_id},function(){
                                        initUserChoose();
                                    });
                                }
                            })();
                        }
                        for(var i = data.classifyList.length;i<6;i++){
                            document.getElementById("edit_hyfl_pic"+(i+1)).src = "img/nopic.jpg";
                        }
                    }else{
                        for(var i=0;i<9;i++){
                            if(data.classifyList[i].iconUrl == null){
                                document.getElementById("edit_hyfl_pic"+(i+1)).src = "img/msg-pay.png";
                            }else{
                                document.getElementById("edit_hyfl_pic"+(i+1)).src = data.classifyList[i].iconUrl;
                            }
                            (function(){
                                var p = i
                                document.getElementById("edit_hyfl_pic"+(i+1)).onclick = function() {
                                    uzu.rest.getJSON("goods/addUserGoodsClassify",{'user_id':user_id,'cat_id':data.classifyList[p].cat_id},function(){
                                        initUserChoose();
                                    });
                                }
                            })();
                        }
                    }
                }else{
                    for(var i=0;i<9;i++){
                        if(data.classifyList[i].iconUrl == null){
                            document.getElementById("edit_hyfl_pic"+(i+1)).src = "img/msg-pay.png";
                        }else{
                            document.getElementById("edit_hyfl_pic"+(i+1)).src = data.classifyList[i].iconUrl;
                        }
                        (function(){
                            var p = i
                            document.getElementById("edit_hyfl_pic"+(i+1)).onclick = function() {
                                uzu.rest.getJSON("goods/addUserGoodsClassify",{'user_id':user_id,'cat_id':data.classifyList[p].cat_id},function(){
                                    initUserChoose();
                                });
                            }
                        })();
                    }
                }
            });
        }
    }
};

