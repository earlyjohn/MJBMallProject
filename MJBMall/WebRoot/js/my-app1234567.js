// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    animateNavBackIcon: true
});
setTimeout('mainView.router.loadPage("main.html")',5000);


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'people') {
    	var count = page.query.count;
        var listHTML = '<ul>';
        for (var i = 0; i < count; i++) {
            listHTML += '<li>' + i + '</li>';
        }
        listHTML += '</ul>';
        $$(page.container).find('.page-content').append(listHTML);
    }
});

