var result = `
/* 先把皮卡丘的皮画出来  */
.preview{
 background-color: #FEE433;
}
/*换个代码高亮吧*/
.token.selector{ color: #8B008B ;}
.token.property{ color: #0077aa ;}

/* 把皮卡丘的鼻子画出来  */

.nose{
  width: 0px;
  height: 0px;
  border: 12px solid  black;
  position: absolute;
  left:50%;
  margin-left:-11px;
  border-radius: 20px/10px;
  border-color:black transparent  transparent;
  top: 25px;
}
/* 把皮卡丘的两只眼睛画出来  */

.eye{
  width: 48px;
  height: 48px;
  background: #2e2e2e;
  border-radius:50%;
  position: absolute;
  border: 2px solid black;
}
/* 把皮卡丘的左眼睛移到位置上  */

.eye.left{
      right: 50%;
      margin-right: 80px;
}
/* 然后是右眼,移到右边  */

.eye.right{
      left: 50%;
      margin-left: 80px;
}
/* 接下来把眼白画出来  */

.eye::after{
  content:"" ;
  display: black;
  width:18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  position: absolute;
  margin-left:9px;
  top: 2px
}
/* 该画脸了,或者说是腮红,左边的  */

.face-left{
  width: 68px;
  height: 68px;
  position: absolute;
  border: 2px solid BLACK;
  background: #FC0D1C;
  border-radius:50%;
  right:50%;
  top: 84px;
  margin-right:110px;
  
}
/* 右边的移到右边  */

.face-right{
  width: 68px;
  height: 68px;
  position: absolute;
  border: 2px solid BLACK;
  background: #FC0D1C;
  border-radius:50%;
  left:50%;
  top: 84px;
  margin-left:110px;
}
/* 上嘴唇 */

.upLip{
  width: 70px;
  height: 24px;
  border:3px solid black;
  position: absolute;
  top: 50px;
  background:#FEE433;
}
/* 左边的调整位置和形状  */

.upLip.left{
  right: 50%;
  border-top:none;
  background-color:#FEE433;
  border-right: none;
  border-bottom-left-radius: 40px 20px;
  transform: rotate(-23deg);
}
/* 右边的调整位置和形状  */

.upLip.right{
  left: 50%;
  border-top:none;
  border-left: none;
  border-bottom-right-radius: 40px 20px;
  transform: rotate(23deg);
}
/* 然后就是下嘴唇了  */

.lowerLip-wrapper{
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 120px;
  overflow: hidden;
  width: 300px;
  top:58px;
}
.lowerLip{
  height: 1000px;
  width: 140px;
  background: #990513;
  border-radius: 100px/500px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -70px;
  overflow: hidden;     
}

.preview {
	height: 55%;
}
/* 小舌头  */
.lowerLip::after{
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: -20px;
  background: #FC4A62;
  left: 50%;
  margin-left: -60px;
  border-radius: 50%;
}

/* 好了,这只皮卡丘就画完了，然后还有   */


/* 小姐姐，你好啊！*/

.words::after{
  content:'小姐姐,我现在有点喜欢你,这可怎么办啊？';
  height:10%;
  width:100%;
  font-family:Helvetica;
  font-size:30px; 
}
















`

!function () {
	var duration = 50;
	$('.actions').on('click', 'button', function (e) {
		let $button = $(e.currentTarget) // button
		let speed = $button.attr('data-speed')
		$button.addClass('active')
			.siblings('.active').removeClass('active')
		switch (speed) {
			case 'slow':
				duration = 100
				break
			case 'normal':
				duration = 50
				break
			case 'fast':
				duration = 20
				break
		}
	})

   
	function writeCode(code, fn) {
		let domCode = document.querySelector('#code');
		let styleTag = document.querySelector("#styleTag")
		let n = 0;
		let id = setTimeout(function run() {
			n += 1;
			domCode.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
			styleTag.innerHTML = code.substring(0, n);
			domCode.scrollTop = domCode.scrollHeight
			if (n < code.length) {
				id = setTimeout(run, duration)
			} else {
				fn && fn.call()
			}
		}, duration)
	}
	writeCode(result)
}.call()


