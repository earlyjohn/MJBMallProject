
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
    debugger;
    var page = e.detail.page;
    module[page.name].init(e);

});




