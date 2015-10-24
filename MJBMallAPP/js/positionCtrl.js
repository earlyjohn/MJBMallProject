var positionCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i style='color: #FFFFFF;' class='icon position_icon-navbar'></i></div>"
                +"<div class='center'>定位</div></div>";
        $$('#positionNavbar').html(html);
        // 回退
        $$('.position_icon-navbar').on('click', function () {
            var html = "<div class='navbar-inner'><div class='left positon'>北京<i class='icon home_icon-navbar'></i></div>"
            + "<div class='center home_back'>" + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "商品<i class='icon home_chose'></i>"
            + "<input id='u465_input' type='text'  class='text_sketch' /> <i class='icon home_search' id='search'></i>"
            + "</div><div class='right'><i class='icon home_message'></i></div></div>";
            $$('#homeNavbar').html(html);
            mainView.router.back();
        });

        //getLocation(showPosition, showPositionError);
    }

};
//var getLocation = function (successFunc, errorFunc) { //successFunc获取定位成功回调函数，errorFunc获取定位失败回调
//    debugger;
//    //首先设置默认城市
//    var defCity = {
//        id: '000001',
//        name: '北京市',
//        date: curDateTime()//获取当前时间方法
//    };
//    //默认城市
//    //$.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(defCity), { expires: 1, path: '/' });

//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function (position) {
//            var lat = position.coords.latitude;
//            var lon = position.coords.longitude;
//            //var map = new BMap.Map("container");   // 创建Map实例
//            var point = new BMap.Point(lon, lat); // 创建点坐标
//            var gc = new BMap.Geocoder();
//            gc.getLocation(point, function (rs) {
//                debugger;
//                var addComp = rs.addressComponents;
//                var curCity = {
//                    id: '',
//                    name: addComp.province,
//                    date: curDateTime()
//                };
//                //当前定位城市
//               // $.cookie('VPIAO_MOBILE_CURRENTCITY', JSON.stringify(curCity), { expires: 7, path: '/' });
//                alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street);
//                if (successFunc != undefined)
//                    successFunc(addComp);
//            });
//        },
//        function (error) {
//            switch (error.code) {
//                case 1:
//                    alert("位置服务被拒绝。");
//                    break;
//                case 2:
//                    alert("暂时获取不到位置信息。");
//                    break;
//                case 3:
//                    alert("获取位置信息超时。");
//                    break;
//                default:
//                    alert("未知错误。");
//                    break;
//            }
//            var curCity = {
//                id: '000001',
//                name: '北京市',
//                date: curDateTime()
//            };
//            //默认城市
//           // $.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(curCity), { expires: 1, path: '/' });
//            if (errorFunc != undefined)
//                errorFunc(error);
//        }, { timeout: 5000, enableHighAccuracy: true });
//    } else {
//        alert("你的浏览器不支持获取地理位置信息。");
//        if (errorFunc != undefined)
//            errorFunc("你的浏览器不支持获取地理位置信息。");
//    }
//};
//var showPosition = function (position) {
//    var lat = position.coords.latitude;
//    var lon = position.coords.longitude;
//    //var map = new BMap.Map("container");   // 创建Map实例
//    var point = new BMap.Point(lon, lat); // 创建点坐标
//    var gc = new BMap.Geocoder();
//    gc.getLocation(point, function (rs) {
//        debugger;
//        var addComp = rs.addressComponents;
//        var curCity = {
//            id: '',
//            name: addComp.province,
//            date: curDateTime()
//        };
//        //当前定位城市
//       // $.cookie('VPIAO_MOBILE_CURRENTCITY', JSON.stringify(curCity), { expires: 7, path: '/' });
//        alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street);
//    });
//};
//var showPositionError = function (error) {
//    switch (error.code) {
//        case 1:
//            alert("位置服务被拒绝。");
//            break;
//        case 2:
//            alert("暂时获取不到位置信息。");
//            break;
//        case 3:
//            alert("获取位置信息超时。");
//            break;
//        default:
//            alert("未知错误。");
//            break;
//    }
//    var curCity = {
//        id: '000001',
//        name: '北京市',
//        date: curDateTime()
//    };
//    //默认城市
//    //$.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(curCity), { expires: 1, path: '/' });
//};
//var curDateTime = function () {
//    var myDate = new Date();
//    var mytime = myDate.toLocaleTimeString();
//    return mytime;
//}
