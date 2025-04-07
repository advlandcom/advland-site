include('js/jquery.easing.1.3.js');
include('js/jquery-ui-1.8.11.custom.min.js');
include('js/jquery.transform-0.9.3.min.js');
include('js/jquery.animate-colors-min.js');
include('js/jquery.backgroundpos.min.js');
include('js/mathUtils.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/jquery.mousewheel.js');
include('js/sprites.js');
include('js/forms.js');
include('js/hoverSprite.js');
include('js/googleMap.js');
include('js/spin.js');
include('js/slider.js');

//----Include-Function----
function include(url){
  document.write('<script src="'+ url + '" type="text/javascript"></script>');
}
//--------global-------------
var isSplash = true;
var isAnim = true;

var spinner;
var mapSpinner;
var MSIE = ($.browser.msie) && ($.browser.version <= 8)


//------DocReady-------------
$(document).ready(function(){
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
    ///////////////////////////////////////////////////////////////////
        loaderInit();
function loaderInit(){
        var opts = {
              lines: 13,
              length: 13,
              width: 6,
              radius: 14,
              rotate: 0,
              color: '#f8c901',
              speed: 1.3,
              trail: 60,
              shadow: false,
              hwaccel: false,
              className: 'spinner',
              zIndex: 2e9,
              top: 'auto',
              left: 'auto'
        };
        var target = $(".page_spinner > span");
        spinner = new Spinner(opts).spin();
        target.append(spinner.el)
        ///////////////////////////////////////
                var opts2 = {
              lines: 12,
              length: 6,
              width: 3,
              radius: 8,
              rotate: 0,
              color: '#000',
              speed: 1.3,
              trail: 60,
              shadow: false,
              hwaccel: false,
              className: 'spinner',
              zIndex: 2e9,
              top: 'auto',
              left: 'auto'
        };
        var target2 = $(".google_map > span");
        mapSpinner = new Spinner(opts2).spin();
        target2.append(mapSpinner.el)

}
///////////////////////////////////////////////////////////////////

     $('ul#menu').superfish({
          delay:       800,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
                    $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='mTextOver'>"+conText+"</div>");
                    //   $(this).append("<div class='_area'></div><div class='_overPl'></div>");

  				})
  	 		}
        });
});

//------WinLoad-------------
$(window).load(function(){

$(".followHolder > ul > li > a").hoverSprite({onLoadWebSite: true});
$("#buttonPrev").hoverSprite({onLoadWebSite: true});
$("#buttonNext").hoverSprite({onLoadWebSite: true});
$(".more3").hoverSprite({onLoadWebSite: true});

$('.more').sprites({method:'gStretch',hover:true});


 $('.more2').hover(
	function(){
 		$(this).find('.extra3').stop().animate({'margin-left':"15px"}, 300)
   },
   function(){
   	    $(this).find('.extra3').stop().animate({'margin-left':"10px"}, 300)
        }
    )

var menuItems = $('#menu >li');

var currentIm = 0;
var lastIm = 0;

//setTimeout(navInit, 3000)
navInit();
function navInit(){

}

///////////////////////////////////////////////
    var navItems = $('.menu > ul >li');

   // $('.menu > ul >li').eq(0).css({'display':'none'});
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		preFu:function(_){
			_.li.find('.box').css({left:"1700px",'display':'none'});
		}
		,actFu:function(_){
			if(_.curr){
			     $(".box", _.curr).each( function(index){
                    _delay = (index*100)+400;
                        $(this).css({'display':'block', left:"1700px"}).stop().delay(_delay).animate({left:"0px"}, 900, 'easeOutCubic');
                });

               // _.curr.css({'display':'block'}).stop().animate({top:"0px"},700,'easeOutCubic');

                cont_resize(_.n);
                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){splashMode();}
                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); }
            }
			if(_.prev){
			     $(".box", _.prev).each( function(index){
                    _delay = index*50;
                        $(this).stop().delay(_delay).animate({left:"-1700px"}, 700, 'easeInCubic');
                });

			    // _.prev.stop().animate({top:'0px'},700,'easeInOutCubic',function(){_.prev.css({'display':'none'});} );
             }
		}
	})


    function splashMode(){
        isSplash = true;
    }

    function contentMode(){
        isSplash = false;
    }

    function cont_resize(_page){
        var li_W = $('#content > ul > li').eq(_page).height();

        if(li_W < 452){li_W = 452}
            $('#content').stop().animate({height:li_W+"px"}, 600, 'easeInOutCubic', function(){centrRepos();} ).css({'overflow':'visible'})

    }

	nav.navs({
			useHash:true,
             hoverIn:function(li){
                    $(".mText", li).stop(true).animate({top:"60px"}, 600, 'easeOutCubic');
                    $(".mTextOver", li).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
                    $("._overPl", li).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
                        $(".mTextOver", li).stop(true).animate({top:"-60px"}, 600, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({top:"-60px"}, 600, 'easeOutCubic');
                   }
                }
		}).navs(function(n){
			$('#content').tabs(n);
		})

//////////////////////////////////////////

   	var h_cont;

	function centrRepos() {
         h_cont = $('.center').height();
         $('body').animate({'min-height':h_cont+240+'px'}, 400)
		var h=$('body').height();
		if (h>(h_cont+40)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=20;
			h_new=h_cont+35;
		}

        m_top = 80;
		$('.center').stop().animate({paddingTop:m_top},600,'easeOutCubic');

	}
	centrRepos();
    ///////////Window resize///////

    function windowW() {
        return (($(window).width()>=parseInt($('body').css('minWidth')))?$(window).width():parseInt($('body').css('minWidth')));
    }


	$(window).resize(function(){
        centrRepos();

        }
    );

    } //window function
) //window load