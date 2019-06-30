$(document).ready(function(){
    $('[data-aos]').each(function(){ $(this).addClass("aos-init"); });
    $("#fullpage").fullpage({
        menu: '#menu',
        anchors: ['homepage', 'aboutpage', 'whyCRpage', 'incentivespage', 'responsibilitiespage', 'faqpage','contactpage'],
        keyboardScrolling: true,
        option: true,
        scrollingSpeed: 500,
        scrollBar: false,
        navigation: true,
        slidesNavigation: true,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk=',
        controlArrows: true,
        navigationPosition: 'up',
        //navigationTooltips: ['Home', 'About', 'College Representative', 'Incentives', 'Responsibilities', 'FAQ','Contact'],
    
        onLeave: function(origin, destination, direction){
            $('.section [data-aos]').each(function(){
                $(this).removeClass("aos-animate");
            });
        },
        onSlideLeave: function(){
            $('.slide [data-aos]').each(function(){
                $(this).removeClass("aos-animate");
            });
        },
        afterSlideLoad: function(){
            $('.slide.active [data-aos]').each(function(){
                $(this).addClass("aos-animate");
            });
        },
        afterLoad: function(origin, destination, direction){
            $('.section.active [data-aos]').each(function(){
                $(this).addClass("aos-animate");
            });
         },
    });
    $.fn.fullpage.setAllowScrolling(true);
    $('.nav-item').on('click',function(){
        var index=$(this).index();
        console.log(index);
        //$("#fp-nav li:nth-child(1)")[0].onclick();
        /*$("#fp-nav li:nth-child(1)").css({
            "color": "yellow", 
            "font-size": "50px",
            "position":"absolute",
            "top": "0"
        });*/
        /*$('.nav-item.active').removeClass('active');
        $(this).addClass('active');
        $(document.body).removeClass();
        $(document.body).addClass("fp-viewing-"+anchorarray[index]);
        $('#fullpage').css({"transform": "translate3d(0px, " + (-index * 722) + "px, 0px)"});
        $('.active.fp-completely').removeClass('active');
        $('#section'+index).addClass("active");
        $('.fp-completely').delay(1000).removeClass('fp-completely');
        $('#section'+index).delay(1000).addClass("fp-completely");
        $('.section [data-aos]').each(function(){
            $(this).removeClass("aos-animate");
        });
        $('.section.active [data-aos]').each(function(){
            $(this).addClass("aos-animate");
        });*/
    });
    function insertnames(){
        $("#fp-nav li:nth-child(1) span").html("Home");
        $("#fp-nav li:nth-child(2) span").html("About");
        $("#fp-nav li:nth-child(3) span").html("Why CR");
        $("#fp-nav li:nth-child(4) span").html("Incentives");
        $("#fp-nav li:nth-child(5) span").html("Responsibilities");
        $("#fp-nav li:nth-child(6) span").html("FAQs");
        $("#fp-nav li:nth-child(7) span").html("Contact Us");
    }
    setTimeout(insertnames,0);
});