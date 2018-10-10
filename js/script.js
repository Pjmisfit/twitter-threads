$(document).ready(function(){
	function makeThread(){
		$(".tweetBox").on('input', function(){
			var tweetVal = $('.tweetBox').val();
			var thisTweetVal = $(this).val().length;

			/*go to each parent div, find .rem, count from 140 character, write this into it*/
			$(this).parent().find(".rem").text(140 - thisTweetVal);
			if (thisTweetVal > 130) {
				$(this).parent().find(".rem").css({"color": "tomato"}); //change color after 130 char
			}
		});
	}
	makeThread();
	/*has to be a better way to write this part */
	/*this has to be the dumbest fucking function*/
	function dumbFunction() {

		$(".copied").append("Copied!");
		$(".empty").append("hommie that box is empty!!");
		

		$(".copy, .copybox").click(function(){
			$("#tweetBox").select();
		    document.execCommand('copy');
		    var tweetVal = $('#tweetBox').val();

		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});

		$(".copy1, .copybox1").click(function(){
			$(".tweetBox1").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox1').val();

		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		    
		});

		$(".copy2, .copybox2").click(function(){
			$(".tweetBox2").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox2').val();
		    
		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});

		$(".copy3, .copybox3").click(function(){
			$(".tweetBox3").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox3').val();
		    
		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});

		$(".copy4, .copybox4").click(function(){
			$(".tweetBox4").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox4').val();
		    
		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});
		$(".copy5, .copybox5").click(function(){
			$(".tweetBox5").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox5').val();
		    
		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});
		$(".copy6, .copybox6").click(function(){
			$(".tweetBox6").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox6').val();
		    
		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});
		$(".copy7, .copybox7").click(function(){
			$(".tweetBox7").select();
		    document.execCommand('copy');
		    var tweetVal = $('.tweetBox7').val();
		    
		    if (tweetVal.length == 0) {
		    	$(".empty").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.empty').removeClass('copied_animation');
				}, 2000);
		    }
		    else{
		    	$(".copied").addClass('copied_animation');
		    	window.setTimeout(function(){ 
				  $('.copied').removeClass('copied_animation');
				}, 2000);

		    }
		});

		$(".thebell").click(function(){
			$('.about_con').toggleClass('come_up');
		});
		$(".closeX").click(function(){
			$('.about_con').removeClass('come_up');
		});
	}
	dumbFunction();

	function fixCopyBox(){
	    $(window).bind('scroll', function() {
	     if ($(window).scrollTop() > 26) {
	        $('.containerCopyBox').addClass('fixed');
	     }
	     else {
	        $('.containerCopyBox').removeClass('fixed');
	     }
		});
	}
	fixCopyBox();
	$('.thebell').addClass('shake');
});



// document.querySelector('.tweetBox').onkeyup = function () {
//   document.querySelector('.rem').innerHTML = (140 - this.value.length);
// }