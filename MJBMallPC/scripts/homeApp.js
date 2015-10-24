
angular.module('homeApp', ['ngRoute', 'typeManageController', 'editTypeController', 'editAttributeController', 'homeController', 'classManageController',
'imageManageController', 'standardsManageController', 'tagManageController', 'chatRecordManageController', 'commentManageController',
'memberAlbumSettingController', 'memberListController', 'adOrderManageController', 'evaluationManageController', 'orderManageController',
'refundManageController', 'reportManageController']).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/type_manage.html',
            controller: 'TypeManageController'
        })
         .when('/type_manage', {
             templateUrl: '/views/type_manage.html',
             controller: 'TypeManageController'
         })
        .when('/edit_type', {
            templateUrl: '/views/edit_type.html',
            controller: 'EditTypeController'
        })
         .when('/edit_attribute', {
             templateUrl: '/views/edit_attribute.html',
             controller: 'EditAttributeController'
         })
         .when('/class_manage', {
             templateUrl: '/views/class_manage.html',
             controller: 'ClassManageController'
         })
         .when('/image_manage', {
             templateUrl: '/views/image_manage.html',
             controller: 'ImageManageController'
         })
        .when('/standards_manage', {
            templateUrl: '/views/standards_manage.html',
            controller: 'StandardsManageController'
        })
         .when('/tag_manage', {
             templateUrl: '/views/tag_manage.html',
             controller: 'TagManageController'
         })
         .when('/chat_record_manage', {
             templateUrl: '/views/chat_record_manage.html',
             controller: 'ChatRecordManageController'
         })
         .when('/comment_manage', {
             templateUrl: '/views/comment_manage.html',
             controller: 'CommentManageController'
         })
         .when('/member_album_setting', {
             templateUrl: '/views/member_album_setting.html',
             controller: 'MemberAlbumSettingController'
         })
         .when('/member_list', {
             templateUrl: '/views/member_list.html',
             controller: 'MemberListController'
         })
         .when('/ad_order_manage', {
             templateUrl: '/views/ad_order_manage.html',
             controller: 'AdOrderManageController'
         })
         .when('/evaluation_manage', {
             templateUrl: '/views/evaluation_manage.html',
             controller: 'EvaluationManageController'
         })
         .when('/order_manage', {
             templateUrl: '/views/order_manage.html',
             controller: 'OrderManageController'
         })
         .when('/refund_manage', {
             templateUrl: '/views/refund_manage.html',
             controller: 'RefundManageController'
         })
         .when('/report_manage', {
             templateUrl: '/views/report_manage.html',
             controller: 'ReportManageController'
         })
        .otherwise({
            templateUrl: '/type_manage.html',
            controller: 'TypeManageController'
        });
}]);