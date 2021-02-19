function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// active

$(document).ready(function(){
  $('.sidenav ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});

// social icons

$('.first li').click(function(){
    $(this).toggleClass("shadow-1").siblings();
    $(this).toggleClass("fill-color").siblings();
});
     

// footer
/*Scroll to top when arrow up clicked BEGIN*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });
    
    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

/* portfolio work */

$(document).ready(function() {
	
	$('.card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});

// portfolio work  filter

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// mobile view navigation 

const menubutton= document.querySelector('.menu-button');
let menuopen = false;

menubutton.addEventListener('click', () => {

    if(!menuopen){
        menubutton.classList.add('open');
        menuopen = true;
    }else{
        menubutton.classList.remove('open');
        menuopen = false;
    }
})



// dropdown

function drowpown() {
    document.getElementById("drowpown").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menu-button-burger')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



//   owl-controls people say

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[600,1],
        pagination: false,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});

