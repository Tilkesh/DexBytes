jQuery(document).ready(function ()
{
	jQuery(window).scrollTop() > 50 ? jQuery("body").addClass("nav_fix") : jQuery("body").removeClass("nav_fix"), jQuery(window).scroll(function () 
    {
		jQuery(window).scrollTop() > 50 ? jQuery("body").addClass("nav_fix") : jQuery("body").removeClass("nav_fix")
	});
});

$(document).ready(function ()
{
	wow = new WOW
	(
    	{
        	animateClass: 'animated',
            offset: 100,
            callback: function (box)
			{
            	console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
            }
        }
	);
	wow.init();
});

/*Support Tab*/
$(document).ready(function() {
  var margin = 0;
  var count = $('.slider').children().length;
    for (i = 0; i < count; i++) {
    $('.tab-box').append($('<span title="">').addClass('tab'));
  }
  $('.tab:first-child').addClass('tab-active');
  $('span.tab:nth-child(1)').attr('title','idea');
  $('span.tab:nth-child(2)').attr('title','Market');
  $('span.tab:nth-child(3)').attr('title','Screen Prototype');
  $('span.tab:nth-child(4)').attr('title','Design');
  $('span.tab:nth-child(5)').attr('title','Development');
  $('span.tab:nth-child(6)').attr('title','Testing');
  $('span.tab:nth-child(7)').attr('title','Deploy');
  $('span.tab:nth-child(8)').attr('title','Support');
  // handlers
  $('.nav-prev').on('click', function() {
    margin += 100;
    
    if (margin/100 > 0) {
      margin = (count - 1) * -100;
    }
    update();
  });
  
  $('.nav-next').on('click', function() {
    margin -= 100;
    
    if (margin/100 < 1 - count) {
      margin = 0;
    }
    update();
  });
  var $tabs = $('.tab');
  $tabs.toArray().forEach(function(element, index, array) {
    (function() {
      $(element).on('click', function() {
        margin = index * -100;
        update();
      });
    })();
  });  
  
  function update() {
    $('.slider').css({'margin-left': margin + '%'});    
    $('.tab-box .tab').removeClass('tab-active');    
    $('.tab-box .tab:nth-child(' + (Math.abs(margin/100) + 1) + ')').addClass('tab-active');
  }
});

/*Scroll*/
$(document).ready(function() {
	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault(); 
		var target = $(this).attr("href");
		$('html, body').stop().animate({
		scrollTop: $(target).offset().top
		}, 600, function()
		{
		location.hash = target; 
		});
		return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('a.menu-item-link.active').removeClass('active');
						$('a.menu-item-link').eq(i).addClass('active');
				}
		});
}).scroll();

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("message");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5500);
}

//add remove class on input box on contact page
/*function initInputBlur() 
{
  $(document).on('blur', 'input', function(event) {
    var inputValue = this.value;
    if (inputValue) {
      this.classList.add('has-content');
    } 
	else {
      this.classList.remove('has-content');
    }
  });
}

//init
initInputBlur();
*/