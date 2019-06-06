$(function() {
	//
	var count = 0;
	var web_width=$(window).width();
	var tab_Banner = setInterval(function() {

		$('.we-tab li:eq(' + count + ')').tab('show');
		
		$('.we-tab li:eq(' + count + ')').find('.we-item').css({
				"box-shadow": "0px 0px 10px #C4181F "
			});
		
		if(count > 0) {
			var item = count - 1;
			

			$('.we-tab li:eq(' + item + ') .shady').css({
				"background-color": "rgba(0,0,0,.5)"
			});

		}
		
		var item2=count-1;
			$('.we-tab li:eq(' + item2 + ')').find('.we-item').css({
				"box-shadow": "1px 1px 0px #fff "
		});
		
		$('.we-tab li:eq(' + count + ') .shady').css('background-color', 'rgba(0,0,0,0)');
		count++;
		if(count == 13) {
			count = 0;
		}
	}, 2500);

	var service_count = 0;
	var service_tab_Banner = setInterval(function() {

		$('.myTab li:eq(' + service_count + ')').tab('show');
		service_count++;
		if(service_count == 5) {
			service_count = 0;
		}
	}, 3000);

	//footer二维码
	$('.btn-authorization').mouseover(function() {
		$('.wechat-code-IP').fadeIn(10);
	});
	$('.btn-authorization').mouseleave(function() {
		$('.wechat-code-IP').fadeOut(10);
	});

	$('.btn-business').mouseover(function() {
		$('.wechat-code-business').fadeIn(10);
	});
	$('.btn-business').mouseleave(function() {
		$('.wechat-code-business').fadeOut(10);
	});
	
	//根据屏幕修改KOL墙图片，以免压缩
	if(web_width<500){
		$('.kol-headers').attr('src','../../static/lib/image/services/koL-Img-min.png');
		$('.col-md-1-5').css({
			'width':'100%'
	
		});
	}
	
	//服务页面的红色箭头，点击下滑效果
	$('.click-to-next-page').click(function(){
		var offset_top=$(this).offset().top;
		$('body,html').animate( {scrollTop: offset_top}, 1000);
//		alert("元素距离顶部"+$(this).offset().top)
//		alert(document.documentElement.scrollTop);
	})
	
})