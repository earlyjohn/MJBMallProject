var loginSelectBoxCtrl = {
    init: function (e) {
        $$('#personalLogin').on('click', function () {
            var url = "personalLogin.html";
            mainView.router.loadPage(url);
        });
    }
};