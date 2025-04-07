$(window).load(function(){
	var sliders = $("#_slider>div"),
		slidNumberNew=0,
		slidNumberOld=0,
		slidAll= $("#_slider>div").length,
		autoPlayState = true,
		anomationStop=false,
		MSIE = ($.browser.msie) && ($.browser.version <= 8);
		
	$(window).bind("hashchange", changeSiteHash);
	changeSiteHash()	
	init()
	function init(){
        $("#buttonNext").click(nextClick)
		$("#buttonPrev").click(prevClick)
        
		sliders.css({"position":"absolute"});
		if(!MSIE){
			sliders.not(sliders.eq(slidNumberNew)).find('.slider_text').animate({"left":'700px'}, 0)
		}else{
		  sliders.not(sliders.eq(slidNumberNew)).find('.slider_text').animate({"left":'700px'}, 0)
		//	sliders.not(sliders.eq(slidNumberNew)).css({'display':'none'});
		}
        
		anomationStop=true;
		autoPlay();
	}
	function changeSiteHash(){
		if(window.location.hash !="#!/home") {
			autoPlayState=false;
		}
	}
	function autoPlay(){
		setTimeout(temeOut, 3000);
		function temeOut(){
			if(autoPlayState){
				slidNumberOld = slidNumberNew
				slidNumberNew++;
				if(slidNumberNew>slidAll-1){
					slidNumberNew=0;
					autoPlayState = false;
				}
				changeImage();
			}
		}
	}
    ////////////////////////////
   $('.navGall > ul > li').click(
    function(){
        if((anomationStop) &&($(this).index() != slidNumberNew)){
          //  var curIndex; 
          //  curIndex = $(this).index();
          //  slidNumberOld = slidNumberNew;
          //  slidNumberNew = curIndex;
          //  changeImage();
        }
    }
)  
///////////////////
	function nextClick(){
		if(anomationStop){
			autoPlayState = false;
			slidNumberOld = slidNumberNew
			slidNumberNew++;
			if(slidNumberNew>slidAll-1){
				slidNumberNew=0;
			}
			changeImage();
		}
		return false;
	}
	function prevClick(){
		if(anomationStop){
			autoPlayState = false;
			slidNumberOld = slidNumberNew
			slidNumberNew--
			if(slidNumberNew<0){
				slidNumberNew=slidAll-1;
			}
			changeImage();
		}
		return false;
	}
    ////////////////////////////
    
	function changeImage(){
		anomationStop=false;
		if(!MSIE){
			sliders.eq(slidNumberOld).find('.slider_text').css({"background":"none"}).animate({"left":'-700px'}, 800 , 'easeInOutCubic')

		}else{
			//sliders.eq(slidNumberOld).css({'display':'none'});
            sliders.eq(slidNumberOld).find('.slider_text').css({"background":"none"}).animate({"left":'-700px'}, 800 , 'easeInOutCubic')
		}

		if(!MSIE){
			sliders.eq(slidNumberNew).find('.slider_text').css({"background":"none",'left':'700px'}).animate({"left":'0px'}, 800, 'easeInOutCubic', function(){anomationStop=true;})
	   }else{
		 // sliders.eq(slidNumberNew).css({'display':'block'});
          sliders.eq(slidNumberNew).find('.slider_text').css({"background":"none",'left':'700px'}).animate({"left":'0px'}, 800, 'easeInOutCubic', function(){anomationStop=true;})
		//	sliders.eq(slidNumberNew).fadeTo(500,1, function(){anomationStop=true;});
          //  setTimeout(function(){anomationStop=true;}, 100)
		}

		autoPlay();
	}

	
})