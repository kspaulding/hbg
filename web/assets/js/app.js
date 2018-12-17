$(document).foundation();

$(document).ready(function(){
	$('.owl-carousel.hero-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
			items:1,
			navigation: true,
			video:true,
			videoWidth:960,
			videoHeight:660,
			lazyLoad: true,
	});
});


$(document).ready(function(){
	$('.owl-carousel.projects-carousel').owlCarousel({
	    loop:true,
	    nav:true,
			items:1,
			navigation: true,
			dots: false,
			responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
							margin:10,
							stagePadding: 40,
	        },
	        600:{
	            items:1,
							margin:20,
							stagePadding: 100,
	        },
	        1000:{
	            items:1,
							margin:50, 
							stagePadding: 150,
	        }
	    }
	});
});



$('#col-container').waypoint(function() {
  $(".col-3").css({ 
        opacity: "1",
        marginTop: "0"
      });
}, { offset: 150 });