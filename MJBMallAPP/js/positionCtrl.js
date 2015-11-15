var positionCtrl = {
    init: function (e) {
    	//地址信息
        // 顶部导航
        var html = '<div class="navbar-inner home_float">' +
            '<div class="left"><i class="iconBack"></i>' +
            '</div><div class="center">定位</div>' +
            '<div class="right"></div></div>';
        $$('#positionNavbar').html(html);
        // 回退
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        var watchId;
			function geoInf( position ) {
				var str = "";
				str += "地址："+position.addresses+"\n";//获取地址信息
				var timeflag = position.timestamp;//获取到地理位置信息的时间戳；一个毫秒数；
				str += "时间戳："+timeflag+"\n";
				var codns = position.coords;//获取地理坐标信息；
				var lat = codns.latitude;//获取到当前位置的纬度；
				str += "纬度："+lat+"\n";
				var longt = codns.longitude;//获取到当前位置的经度
				str += "经度："+longt+"\n";
				var alt = codns.altitude;//获取到当前位置的海拔信息；
				str += "海拔："+alt+"\n";
				var accu = codns.accuracy;//地理坐标信息精确度信息；
				str += "精确度："+accu+"\n";
				var altAcc = codns.altitudeAccuracy;//获取海拔信息的精确度；
				str += "海拔精确度："+altAcc+"\n";
				var head = codns.heading;//获取设备的移动方向；
				str += "移动方向："+head+"\n";
				var sped = codns.speed;//获取设备的移动速度；
				str += "移动速度："+sped;
				console.log(JSON.stringify(position));
				alert( str );
				window.localStorage.setItem("addr",position.address.province);
				window.localStorage.setItem("jingdu", position.coords.longt);
        		window.localStorage.setItem("weidu", position.coords.lat);
		} 
        // 通过百度定位模块获取位置信息
		$$('#getPosition').on('click',function getPosBaidu(){
				alert("获取百度定位位置信息");
				plus.geolocation.getCurrentPosition( geoInf, function ( e ) {
					alert("获取百度定位位置信息失败"+e.message);
				},{provider:'baidu'});
		});
	
    	$$('#getPos').on('click',function(require){
			var $ = require("jquery");
			var ChineseDistricts = require("$js/distpicker.data");
			
		    'use strict';

		 	 if (typeof ChineseDistricts === 'undefined') {
		    throw new Error('The file \'distpicker.data.js\' must be included first!');
		  }
		
		  var NAMESPACE = '.distpicker',
		      EVENT_CHANGE = 'change' + NAMESPACE,
		
		      Distpicker = function (element, options) {
		        this.$element = $(element);
		        this.defaults = $.extend({}, Distpicker.DEFAULTS, $.isPlainObject(options) ? options : {});
		        this.placeholders = $.extend({}, Distpicker.DEFAULTS);
		        this.active = false;
		        this.init();
		      };
		
		  Distpicker.prototype = {
		    constructor: Distpicker,
		
		    data: ChineseDistricts,
		
		    init: function () {
		      var defaults = this.defaults,
		          $select = this.$element.find('select'),
		          length = $select.length,
		          data = {};
		
		      $select.each(function () {
		        $.extend(data, $(this).data());
		      });
		
		      $.each(['province', 'city', 'district'], $.proxy(function (i, type) {
		        if (data[type]) {
		          defaults[type] = data[type];
		          this['$' + type] = $select.filter('[data-' + type + ']');
		        } else {
		          this['$' + type] = length > i ? $select.eq(i) : null;
		        }
		      }, this));
		
		      this.addListeners();
		      this.reset(); // Reset all the selects.
		      this.active = true;
		    },
		
		    addListeners: function () {
		      if (this.$province) {
		        this.$province.on(EVENT_CHANGE, $.proxy(function () {
		          this.output('city');
		          this.output('district');
		        }, this));
		      }
		
		      if (this.$city) {
		        this.$city.on(EVENT_CHANGE, $.proxy(function () {
		          this.output('district');
		        }, this));
		      }
		    },
		
		    removeListeners: function () {
		      if (this.$province) {
		        this.$province.off(EVENT_CHANGE);
		      }
		
		      if (this.$city) {
		        this.$city.off(EVENT_CHANGE);
		      }
		    },
		
		    output: function (type) {
		      var defaults = this.defaults,
		          placeholders = this.placeholders,
		          $select = this['$' + type],
		          data = {},
		          options = [],
		          value,
		          zipcode,
		          matched;
		
		      if (!$select || !$select.length) {
		        return;
		      }
		
		      value = defaults[type];
		      zipcode = (
		        type === 'province' ? 1 :
		        type === 'city'   ? this.$province && this.$province.find(':selected').data('zipcode') :
		        type === 'district' ? this.$city && this.$city.find(':selected').data('zipcode') : zipcode
		      );
		
		      data = $.isNumeric(zipcode) ? this.data[zipcode] : null;
		
		      if ($.isPlainObject(data)) {
		        $.each(data, function (zipcode, address) {
		          var selected = (address === value);
		
		          if (selected) {
		            matched = true;
		          }
		
		          options.push({
		            zipcode: zipcode,
		            address: address,
		            selected: selected
		          });
		        });
		      }
		
		      if (!matched) {
		        if (options.length && (defaults.autoSelect || defaults.autoselect)) {
		          options[0].selected = true;
		        }
		
		        // Save the unmatched value as a placeholder at the first output
		        if (!this.active && value) {
		          placeholders[type] = value;
		        }
		      }
		
		      // Add placeholder option
		      if (defaults.placeholder) {
		        options.unshift({
		          zipcode: '',
		          address: placeholders[type],
		          selected: false
		        });
		      }
		
		      $select.html(this.template(options));
		    },
		
		    template: function (options) {
		      var html = '';
		
		      $.each(options, function (i, option) {
		        html += (
		          '<option value="' +
		          (option.address && option.zipcode ? option.address : '') +
		          '"' +
		          ' data-zipcode="' +
		          (option.zipcode || '') +
		          '"' +
		          (option.selected ? ' selected' : '') +
		          '>' +
		          (option.address || '') +
		          '</option>'
		        );
		      });
		
		      return html;
		    },
		
		    reset: function (deep) {
		      if (!deep) {
		        this.output('province');
		        this.output('city');
		        this.output('district');
		      } else if (this.$province) {
		        this.$province.find(':first').prop('selected', true).trigger(EVENT_CHANGE);
		      }
		    },
		
		    destroy: function () {
		      this.removeListeners();
		      this.$element.removeData('distpicker');
		    }
		  };
		
		  Distpicker.DEFAULTS = {
		    autoSelect: true,
		    placeholder: true,
		    province: '—— 省 ——',
		    city: '—— 市 ——',
		    district: '—— 区 ——'
		  };
		
		  Distpicker.setDefaults = function (options) {
		    $.extend(Distpicker.DEFAULTS, options);
		  };
		
		  // Register as jQuery plugin
		  $.fn.distpicker = function (options) {
		    var args = [].slice.call(arguments, 1),
		        result;
		
		    this.each(function () {
		      var $this = $(this),
		          data = $this.data('distpicker'),
		          fn;
		
		      if (!data) {
		        $this.data('distpicker', (data = new Distpicker(this, options)));
		      }
		
		      if (typeof options === 'string' && $.isFunction((fn = data[options]))) {
		        result = fn.apply(data, args);
		      }
		    });
		
		    return (typeof result !== 'undefined' ? result : this);
		  };
		
		  $.fn.distpicker.Constructor = Distpicker;
		  $.fn.distpicker.setDefaults = Distpicker.setDefaults;
		
		  $(function () {
		    $('[data-toggle="distpicker"],[data-distpicker],[distpicker]').distpicker();
		  });
		});
    }
}
			