function fixSlider(){
    var sliderHeight    = $('.jslider_images').height()+48;
    $('#slider').height(sliderHeight);
}
fixSlider();    
$( window ).resize(function() {
   fixSlider();  
});
$(window).on("orientationchange",function(){
    fixSlider();  
}); 
