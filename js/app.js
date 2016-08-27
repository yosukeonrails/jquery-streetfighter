
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

	$(document).ready(function(){



	$('.ryu').mouseenter(function(){
		$('.still').hide();
		$('.ready').show();
	})

	.mouseleave(function(){
		$('.ready').hide();
		$('.still').show();
	})

	.mousedown(function(){
		$('.ready').hide();
		$('.throwing').show();
		playHadouken();

		$('.hadouken').finish().show().animate({'left':'1020px'},500,
				function(){
					$('.hadouken').hide();
					$('.hadouken').css('left', '600px');
				})

	})

	.mouseup(function(){
		$('.throwing').hide();
		$('.ready').show();
	})

    $(document).keydown(function(){

			if(event.which==88){
				
				$('.throwing').hide();
				$('.ready').hide();
				$('.still').hide();
				$('.cool').show();
		} 

	})
	 	.keyup(function(){

	 		if(event.which==88){

	 			$('.cool').hide();
				$('.ready').show();
	 		}
	 	})

	 	




	})