;(function($){
	$.fn.magnify=function (opts) {
		var opts=$.extend({},$.fn.magnify.defaults,opts);
		return this.each(function () {
			$('#small img').attr('src',opts.img);
			$('#biger img').attr('src',opts.img);
			$('#small').css({'width':opts.s_wh,'height':opts.s_wh});
			$('#biger').css({'width':opts.b_wh,'height':opts.b_wh});
			var bili=opts.b_wh/50;
			$('#biger img').css({'width':bili*opts.s_wh,'height':bili*opts.s_wh});
			$('#small').mousemove(function(e){
			var e=e||window.event;
			$('#small div').css('display','block');
			$('#small img').css('display','block');
			$('#biger').css('display','block');
			var maxl=$('#small').innerWidth()-$('#small div').innerWidth();
			var maxt=$('#small').innerHeight()-$('#small div').innerHeight();
			var l=e.clientX-$('#small img').offset().left-$('#small div').innerWidth()/2;
			var t=e.clientY-$('#small img').offset().top-$('#small div').innerHeight()/2;
			
			if (l<0) {
					l=0;
				}else if (l>maxl) {
					l=maxl;
				}
				if (t<0) {
					t=0;
				}else if (t>maxt) {
					t=maxt;
				}
				
			$('#small div').css({'left':l,'top':t});
			var Left=l/($('#small').innerWidth()-$('#small div').innerWidth());
			var Top=t/($('#small').innerHeight()-$('#small div').innerHeight());
			var ll=$('#biger').innerWidth()-$('#biger img').innerWidth();
			var tt=$('#biger').innerHeight()-$('#biger img').innerHeight();
			$('#biger').scrollLeft(-Left*ll);
			$('#biger').scrollTop(-Top*tt);
			})
		})

	}
	$.fn.magnify.defaults={
		s_wh:150,
		b_wh:200,
		img:'img/2.jpg'
	}	
})(jQuery)