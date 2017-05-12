$(function(){
	$('#small').mousemove(function(e){
		var e=e||window.event;
		$('#small div').css('display','block');
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
		var num=4;
		$('#biger').scrollLeft(num*l);
		$('#biger').scrollTop(num*t);
	})
})