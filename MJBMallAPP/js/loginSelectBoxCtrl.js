var loginSelectBoxCtrl = {
    init: function (e) {
        $$('#personalLogin').on('click', function () {
            var url = "personalLogin.html?userType=0";
            mainView.router.loadPage(url);
        });
        $$('#shopLogin').on('click', function () {
            var url = "shopLogin.html?userType=1";
            mainView.router.loadPage(url);
        });
       
    }
};