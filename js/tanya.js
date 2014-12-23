

/*-------------#top---------------------*/

             $(document).ready(function(){
             $("#back-top").hide();
             $(function () {
             $(window).scroll(function(){
             if ($(window).scrollTop()>150){
             $("#back-top").fadeIn(800);
           }
          else
       {
       $("#back-top").fadeOut(800);
      }
    });
        $("#back-top").click(function(){
         $('body,html').animate({scrollTop:0},1000);
         return false;
       });
     });
    });

/*-------------sticup---------------------*/

      jQuery(function($) {
        $(document).ready( function() {
          $('.pr_header').stickUp({
                        parts: {
                          0:'cunchu',
                          1:'jiasu',
                          2: 'shuju',
                          3: 'kaifa',
                        },
                        itemClass: 'ioc_size',
                        itemHover: 'active',
                        topMargin: 'auto',
                      });
        });
      });
	  
	
	$(function(){
	  $("#md_1").click( function(){
		$("#cunchu").css('padding-top','100px');
		$("#jiasu").css('padding-top','40px');
		$("#shuju").css('padding-top','40px');
		$("#kaifa").css('padding-top','40px');
		 });
	  $("#md_2").click( function(){
		$("#cunchu").css('padding-top','40px');
		$("#jiasu").css('padding-top','100px');
		$("#shuju").css('padding-top','40px');
		$("#kaifa").css('padding-top','40px');
		 });
	  $("#md_3").click( function(){
		$("#cunchu").css('padding-top','40px');
		$("#jiasu").css('padding-top','40px');
		$("#shuju").css('padding-top','90px');
		$("#kaifa").css('padding-top','40px');
		 });
	  $("#md_4").click( function(){
		$("#cunchu").css('padding-top','40px');
		$("#jiasu").css('padding-top','40px');
		$("#shuju").css('padding-top','40px');
		$("#kaifa").css('padding-top','90px');
		 });
		 
	 });
