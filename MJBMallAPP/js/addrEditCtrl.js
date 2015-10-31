var addrEditCtrl = {
	init: function (e) {
		// 顶部导航
		var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-backwhite'></i></div><div class='center'>修改地址"
                + "</div><div class='right'></div></div>";
		$$('#addrEditNavbar').html(html);
		var query = $$.parseUrlQuery(e.detail.page.url);
		var addressId = query.addressId;
		var temp = parseInt(addressId);
		uzu.rest.getJSON("orders/findAddress", { 'addressId': temp }, function (result) {
		    if (!result.result.addressList)
		        return;
		    var addressList = result.result.addressList;
		    $$('#name').val(addressList[0].name);
		    $$('#sjphone').val(addressList[0].phone);
		    $$('#detailAddress').val(addressList[0].address);
		});
        $$('#saveButton').on('click', function () {
           
            var name = $$('#name').val();
            var picker_dependent = $$('#picker-dependent').val();
            var detailAddress = $$('#detailAddress').val();
            var sjphone = $$('#sjphone').val();
            var gdphone = $$('#gdphone').val();
            var postcard = $$('#postcard').val();
            uzu.rest.getJSON("/orders/updateAddress", { 'addressId': temp, 'name': name, 'phone': sjphone, 'address': detailAddress }, function (result) {
                if (result.result.msg == "success") {
                    mainView.router.loadPage(addrListCtrl.html);
                } else if (result.result.msg == "fail") {
                    alert("保存失败");
                }
            });
        });
		// 回退
		$$('.icon-backwhite').on('click', function () {
			mainView.router.back();
		});

	}
};

