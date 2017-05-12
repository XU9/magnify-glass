function magnify(samll,biger,simg,smove) {
			this.small=document.getElementById('small');
			this.biger=document.getElementById('biger');
			this.sImg=this.small.querySelector('img');
			this.smove=this.small.querySelector('div');
			// console.log(this,this.sImg,this.smove);
			var _this = this;
			this.small.onmousemove = function () {

				_this.smove.style.display="block";
				_this.biger.style.display="block";
				var e=e||window.event;
				maxl=_this.small.offsetWidth-_this.smove.offsetWidth;
				maxt=_this.small.offsetHeight-_this.smove.offsetHeight;
				var l=e.clientX-_this.small.offsetLeft-_this.smove.offsetWidth/2;
				var t=e.clientY-_this.small.offsetTop-_this.smove.clientHeight/2;
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
				// console.log(e.clientX,e.clientY);
				_this.smove.style.left=l+"px";
				_this.smove.style.top=t+"px";
				var num=4;
				_this.biger.scrollLeft=num*l;
				_this.biger.scrollTop=num*t;
			}
		

		}
		