/**
 * Created by Administrator on 2015/10/31.
 */
var chatCtrl = {
    init: function (e) {
    	
        var html = '<div class="navbar-inner"id="pd_detail"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack"></i></div>'
			        +'<div class="center">聊天消息 </div><div class="right"><i style="color: #FFFFFF;" class="icon"></i>'
			        +'</div></div>';
        $$('#chatNavbar').html(html);
        $$('#productListNav').hide();
		var myApp = new Framework7();
		
		var $$ = Dom7;
		// �Ựflag
		var conversationStarted = false;
		
		// Init Messages
		var myMessages = myApp.messages('.messages', {
		    autoLayout:true
		});
		
		// Init Messagebar
		var myMessagebar = myApp.messagebar('.messagebar');
		
		// Handle message
		$$('.messagebar .link').on('click', function () {
		    // Message text
		    var messageText = myMessagebar.value().trim();
		    // Exit if empy message
		    if (messageText.length === 0) return;
		
		    // Empty messagebar
		    myMessagebar.clear();
		
		    // �����Ϣ����
		    var messageType = (['sent', 'received'])[Math.round(Math.random())];
		
		    // ���յ���Ϣ��ͷ������
		    var avatar, name;
		    if(messageType === 'received') {
		        avatar = 'http://lorempixel.com/output/people-q-c-100-100-9.jpg';
		        name = 'Kate';
		    }
		    // Add message
		    myMessages.addMessage({
		        // Message text
		        text: messageText,
		        // �����Ϣ����
		        type: messageType,
		        // ͷ������
		        avatar: avatar,
		        name: name,
		        // ����
		        day: !conversationStarted ? 'Today' : false,
		        time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
		    });
		
		    // ���»Ựflag
		    conversationStarted = true;
		});
		        $$('.goBack').on('click', function () {
		        $$("#homeToolbar").show();
		        $$("#productDetailNav").hide();
		        $$("#productListNav").show();
		
		            mainView.router.back();
		        });
	}
};

