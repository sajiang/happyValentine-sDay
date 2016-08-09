
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if(progress>268){
					$ele.find(".page1").hide();
					if(progress>1812){
						$ele.find(".page2").hide();
					}
				}
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 50);
		});
		return this;
	};
})(jQuery);
$(function(){
	$("#code").typewriter();
})