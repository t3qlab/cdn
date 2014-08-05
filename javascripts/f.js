/*
	jquery 를 이용하기 위한 Lib 필요 TFB_LIB
	실제 요청과 관련된 변수 필요 TFB
	
	iframe 생성 후~ 작업도 괜찮음..
 */

FBLib = function() {
	this.start = function() {
		try {
			var t = eval("jQuery");
			window.jQueryImport = true;
			htmlLoad();
		} catch (e) {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.charset = "UTF-8";
			var loaded = false;
			script.onreadystatechange = function() {
				if (this.readyState == 'loaded' || this.readyState == 'complete') {
					if (loaded)
						return;
					loaded = true;
					window.jQueryImport = true;
					htmlLoad();
				}
			};
			script.onload = function() {
				if (loaded)
					return;
				loaded = true;
				window.jQueryImport = true;
				htmlLoad();
			};
			script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js";

			head.appendChild(script);
		}
	};
	
	this.click = function(){
		/*
		 * 1. Masking 처리
		 * 2. Animation 처리
		 * 3. 화면 처리
		 * 4. Data 처리
		 * 5. Click 이벤트 처리 
		 * */
		
		$('#feedback_form').show();
		
		$('#feedback_form').find('.submit_btn').click(function(){
			fbLib.submit();
			return false;
		});

		$('#feedback_form').find('.cancel_btn').click(function(){
			
			return false;
		});
	};
	
	this.submit = function(){
		jQuery.getJSON('http://localhost:8081/saas/in?'+$('#feedback_form').serialize(), function(data) {
			console.log(data);
		});
		
		return false;
	};
};
var fbLib = new FBLib();


function htmlLoad() {
	//var _a = $('<a href="">')
}


fbLib.start();