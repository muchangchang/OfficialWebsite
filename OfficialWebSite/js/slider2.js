    $(function(){
		var slider = $(".nav-line");
		$(".menuContainer>li").each(function(index, element) {
			$(element).hover(function(e){
				var width = index * 124 + 12 + "px";
            	slider.stop().animate({"margin-left":width});
			},
			function(e){
					slider.stop().animate({'margin-left':12+124});
					})
        });
		var mask = $('#mask');
		var iconNav = $('.icon-nav');
		mask.click(function(){
			iconNav.slideUp();
			mask.fadeOut();
		});
		
		$('.nav-icon').click(function(e){
			iconNav.slideDown();
				mask.fadeIn();
			});
    });
