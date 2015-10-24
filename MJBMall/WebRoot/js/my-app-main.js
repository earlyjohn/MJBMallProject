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
$$.post('position', {page:1, rows:10}, function (data) {
	
	var data2=eval("(" + data + ")");  
	var myobj=eval(data2.list);  
	if(myobj==null){
		location.reload(); 
	}else{
		var listHTML="";
		for(var i=0;i<myobj.length;i++){  
			listHTML="<li><a href='position.html?id="+myobj[i].id+"' class='item-link item-content'><div class='item-inner'><div class='item-title'><span style='font-family:"+"微软雅黑"+";'>"+myobj[i].position+"</span></div><div class='item-after'><span style='color:red;font-family:"+"微软雅黑"+";'>"+myobj[i].salary+"/"+myobj[i].date+"</span></div></div></a></li>";
			  
			$$('#form_position').append(listHTML);
		} 
	}
	
	});

myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    if (page.name === 'position') {
    	$$.post('positionDetails', {id:page.query.id}, function (data) {
    		var data2=eval("(" + data + ")");  
    		var myobj=eval(data2.list);  
    		$$('#position').text(myobj[0].position);
    		$$('#details').text(myobj[0].details);
    		$$('#workTime').text(myobj[0].workTime);
    		$$('#salary').text(myobj[0].salary+"/"+myobj[0].date);
    		$$('#phone').text(myobj[0].phone);
    		});
    }
});

