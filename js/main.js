'use strict';

function openProject() {

	var portfolioItem = $('.portfolio-item > a');
	var singleProject = $('#single-project');
	var loader = "<div class=\"project-loader\"><div class=\"bubblingG\"><span id=\"bubblingG_1\"></span><span id=\"bubblingG_2\"></span><span id=\"bubblingG_3\"></span></div>Loading...</div>";

	portfolioItem.click(function () {

		var link = $(this).attr('href');
		$('html, body').animate({
			scrollTop: singleProject.offset().top - 90
		}, 500);
		singleProject.slideUp(500).addClass("project");

		singleProject.after(loader);
		singleProject.empty();

		setTimeout(function () {
			singleProject.load(link, function (response, status) {
				if (status === "error") {
					alert("An error");
				} else {
					singleProject.slideDown(500);

					var closeProject = $('#close-project');
					closeProject.on('click', function () {
						singleProject.slideUp(500);
						setTimeout(function () {

							singleProject.empty();
						}, 500);
					});
				}
				$('.project-loader').remove();
			});
		}, 500);
		return false;
	});
}

//Initialization
openProject();


window.onload = function() {
 $('#wrapper').removeClass('loading');
 $('.loader').addClass('removing');
	setTimeout(function(){
		$('.loader').remove();
	}, 2000);
};

//What happen on window resize
/*$(window).resize(function () {
	homeFullScreen();
    $('.video-bg').css({'min-heigth':'130%'});
});*/


function hideShow(el)
{
	$(".popup-overlay").show();
	$('.portfolio-popap').hide();
	$(el).parent().parent().next().find(".portfolio-popap").fadeIn();
	var filter = $('.filter.active').data('filter');
	var portfolioTop = $('#portfolio-img');
	
	var sum = 0;
	if ($(window).width() >= '768') {
		$('.portfolio-popap').css('top',''+ sum + 'px');
	}

    $('.portfolio-popap').find('a.arrow_right').show();
    $('.portfolio-popap').find('a.arrow_left').show();
	
	scroll_top = $(window).scrollTop();
    $("html, body").addClass("scroll-none");
}
var scroll_top = $(window).scrollTop();


function hideShow1(el)
{
	$(".popup-overlay").show();
	$('.portfolio-popap').hide();
	$(el).parent().parent().next().find(".portfolio-popap").fadeIn();
	var filter = $('.filter.active').data('filter');
	var portfolioTop = $('#portfolio-img');
	
	var sum = 0;
	if ($(window).width() >= '768') {
		$('.portfolio-popap').css('top',''+ sum + 'px');
	}

    $('.portfolio-popap').find('a.arrow_right').show();
    $('.portfolio-popap').find('a.arrow_left').show();
    scroll_top = $(window).scrollTop();
    $("html, body").addClass("scroll-none");
}

function Close(){
    $("html, body").removeClass("scroll-none");
    $(window).scrollTop(scroll_top);
    $('.portfolio-popap').fadeOut();
    $(".popup-overlay").hide();
}

function Next(el){
	var filter = $('.filter.active').data('filter');
	var elem =$('.'+el);
	$('.portfolio-popap').fadeOut();
	$(elem).stop(true).fadeTo(0, 1);
}

function Prev(el){
	var filter = $('.filter.active').data('filter');
	var elemprev =$('.'+el);
	$('.portfolio-popap').fadeOut();
	$(elemprev).stop(true).fadeTo(0, 1);
}


