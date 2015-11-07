
window.myApp = new Framework7({
    modalButtonOk: '确定',
    modalButtonCancel: '取消'
});

window.$$ = Dom7;
window.mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});
mainView.router.refreshPage();
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
        if(window.plus){
		plusReady();
		}else{ 
		    document.addEventListener( "plusready", plusReady, false );
		}
		// 扩展API准备完成后要执行的操作
		function plusReady(){
		    var ws = plus.webview.currentWebview(); //pw回车可输出plus.webview
		    // ... code
		}
    module[page.name].init(e);
});




