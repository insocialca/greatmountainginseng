/* In Social Code */

$(function(){
  /* FAQ Accordion */
  $('.faq-list__question').click(function(){
    console.log("test");
    if($(this).attr("data-faq-status") == "active") {
      $("*[data-faq-id=" + $(this).attr('data-faq-id') + "]").attr("data-faq-status", "close");
    } else {
      $("*[data-faq-id=" + $(this).attr('data-faq-id') + "]").attr("data-faq-status", "active");
    }
  });
  
  /* Locations Map Update */
  $('*[data-map-url]').click(function(e){
    e.preventDefault();
    var mapFrame = $('*[data-map-iframe]');
    mapFrame.attr('data-map-iframe',$(this).attr('data-map-type')).children('iframe').attr('src',$(this).attr('data-map-url'));
    $('html,body').animate({
  	  scrollTop: mapFrame.offset().top - 200
 	}, 'slow');
  });
});