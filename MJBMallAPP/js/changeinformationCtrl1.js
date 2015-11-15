var changeinformationCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a>'
            + '<div class="center">修改基本资料</div><div class="right editCart"><a class="link link-u saveBtn" style="color: white">保存</a></div></div>';
        $$('#changeinformationNavbar').html(html);
        var user_id = window.localStorage.getItem("userId");
		var files=[];
        uzu.rest.getJSON("/members/getUserinfo", { 'member_id': user_id }, function (data) {

            // 渲染模板
            var context = {};

            context.userList = data.result.userinfoList;

            var userinfoListTemplate = $$('#memberInformationTpl').html();

            var compiledUserinfoListTemplate = Template7.compile(userinfoListTemplate);

            var html = compiledUserinfoListTemplate(context);
            $$('#memberInformation').html(html);

        });
		  $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('.saveBtn').on('click', function () {
//      	document.getElementById('pic_path').name="image";
//      	document.getElementById('member_id').value=user_id;
//      	document.getElementById('pic_path').value=files;
//      	document.getElementById('upHeadpic').click();
        	alert(files);
            var nickname = $$("#nickname").val();
            var sex = $$("#sex").val();
            var income = $$("#income").val();
            var birthday = $$("#birthday").val();
            var tall = $$("#tall").val();
            var degree = $$("#degree").val();
            var marry = $$("#marry").val();
            var phone = $$("#phone").val();
            var buyhouse = $$("#buyhouse").val();
            var address = $$("#address").val();
            if (!nickname) {
                myApp.alert("昵称不能为空", "error")
                return;
            }
            if (!phone) {
                myApp.alert("请输入手机号", "error")
                return;
            }
            if (sex == "男")
                sex = 1;
            if (sex == "女")
                sex = 0;

            uzu.rest.getJSON("/members/saveUserinfo", { 'member_id':user_id, 'nickname':nickname, 'sex':sex, 'birthday':birthday, 'tall':tall, 'income':income, 'address':address, 'degree':degree, 'marry':marry, 'phone': phone, 'buyhouse': buyhouse }, function (result) {

                if (result.result.msg == 1) {

                    mainView.router.loadPage("personalCenter.html");
                }
           
           upload();
            });
        });

      
          /*个人中心——换头像*/
       $$('#changeImage').on('click', function(e) {
       	alert("打开照相机");
			var a = [{
				title: "拍照"
			}, {
				title: "从手机相册选择"
			}];
			plus.nativeUI.actionSheet({
				title: "修改头像",
				cancel: "取消",
				buttons: a
			}, function(b) {

				switch (b.index) {
					case 0:
						break;
					case 1:
						getImage();
						break;
					case 2:
						galleryImg();
						break;
					default:
						break
				}
			})
		});

		function getImage() {
			var c = plus.camera.getCamera();
			c.captureImage(function(e) {
				plus.io.resolveLocalFileSystemURL(e, function(entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					console.log(s);
					document.getElementById("Hpic").src = s;
					//变更大图预览的src
					//目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
					document.querySelector("#__mui-imageview__group .mui-slider-item img").src = s + "?version=" + new Date().getTime();;;
					 var reader = new FileReader();  
					reader.onloadend = function()  
					 {  
					 document.getElementById("Hpic").innerHTML = this.result;  
					  };  
					reader.readAsText(files,UFT-8); 
				}, function(e) {
					console.log("读取拍照文件错误：" + e.message);
				});
			}, function(s) {
				console.log("error" + s);
			}, {
				filename: "_doc/head.jpg"
			})
		}
		function galleryImg() {
			plus.gallery.pick(function(a) {
				plus.io.resolveLocalFileSystemURL(a, function(entry) {
					plus.io.resolveLocalFileSystemURL("_doc/", function(root) {
						root.getFile("head.jpg", {}, function(file) {
							//文件已存在
							file.remove(function() {
								console.log("file remove success");
								entry.copyTo(root, 'head.jpg', function(e) {
										var e = e.fullPath + "?version=" + new Date().getTime();
										document.getElementById("Hpic").src = e;
										//变更大图预览的src
										//目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
										document.querySelector("#__mui-imageview__group .mui-slider-item img").src = e + "?version=" + new Date().getTime();; 
									},
									function(e) {
										console.log('copy image fail:' + e.message);
									});
							}, function() {
								console.log("delete image fail:" + e.message);
							});
						}, function() {
							//文件不存在
							entry.copyTo(root, 'head.jpg', function(e) {
									var path = e.fullPath + "?version=" + new Date().getTime();
									document.getElementById("head-img").src = path;
									document.getElementById("head-img1").src = path;
									//变更大图预览的src
									//目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
									document.querySelector("#__mui-imageview__group .mui-slider-item img").src = path;
									 var reader = new FileReader();  
								       reader.onload = function()  
								       {  
								           document.getElementById("Hpic").innerHTML = this.result;  
								       };  
								       reader.readAsText(files,UFT-8);
								},
								function(e) {
									console.log('copy image fail:' + e.message);
								});
						});
					}, function(e) {
						console.log("get _www folder fail");
					})
				}, function(e) {
					console.log("读取拍照文件错误：" + e.message);
				});
			}, function(a) {}, {
				filter: "image"
			})
//			document.getElementById('pic_path').click();
//			alert("你好！");
//			var a = $$('#pic_path').val();
//			alert(a);
//			alert(user_id);
		};
		function defaultImg() {
			plus.io.resolveLocalFileSystemURL("_doc/head.jpg", function(entry) {
				var s = entry.fullPath + "?version=" + new Date().getTime();;
				document.getElementById("Hpic").src = s;
			}, function(e) {
				document.getElementById("head-img").src = '../images/logo.png';
				document.getElementById("head-img1").src = '../images/logo.png';
			})
		}
		//
		var server="http://115.28.204.151:8088/MJBMall/upload/upload1";
var files=[];
// 上传文件
$$('#upload').on('click',function upload(){
	if(files.length<=0){
		plus.nativeUI.alert("没有添加上传文件！");
		return;
	}
	outSet("开始上传：")
	var wt=plus.nativeUI.showWaiting();
	var task=plus.uploader.createUpload(server,
		{method:"POST"},
		function(t,status){ //上传完成
			if(status==200){
				outLine("上传成功："+t.responseText);
				plus.storage.setItem("uploader",t.responseText);
				var w=plus.webview.create("uploader_ret.html","uploader_ret.html",{scrollIndicator:'none',scalable:false});
				w.addEventListener("loaded",function(){
					wt.close();
					w.show("slide-in-right",300);
				},false);
			}else{
				outLine("上传失败："+status);
				wt.close();
			}
			
		}
	);
	task.addData("client","HelloH5+");
	task.addData("uid",getUid());
	for(var i=0;i<files.length;i++){
		var f=files[i];
		task.addFile(f.path,{key:"image"});
	}
	task.start();
});
// 拍照添加文件
$$('#appendByCamera').on('click',function appendByCamera(){
	plus.camera.getCamera().captureImage(function(p){
		appendFile(p);
	});	
});
// 从相册添加文件
$$('#appendByGallery').on('click',function appendByGallery(){
	plus.gallery.pick(function(p){
        appendFile(p);
    });
});
// 添加文件
var index=1;
function appendFile(p){
	var fe=document.getElementById("files");
	var li=document.createElement("li");
	var n=p.substr(p.lastIndexOf('/')+1);
	li.innerText=n;
	fe.appendChild(li);
	files.push({name:"uploadkey"+index,path:p});
	index++;
	empty.style.display="none";
}
// 产生一个随机数
function getUid(){
	return Math.floor(Math.random()*100000000+10000000).toString();
}
    }

};

