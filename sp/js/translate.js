$(document).ready(function(){
  
  // By default
  $('.en_lang').addClass("active-lang");
  $('#lang-switch .en').addClass("active-flag");
  
  // Function switch
  $(function() {
    // Vietnam button
    $("#lang-switch .vi").click(function() {
      // Enable Vietnam
      $('.vi_lang').addClass("active-lang"); 
      
      // Disable English
      $('.en_lang').removeClass("active-lang") 
      
      // Active or remove the opacity on the flags.
      $('#lang-switch .vi').addClass("active-flag");
      $('#lang-switch .en').removeClass("active-flag");
    });
    
    // English button
    $("#lang-switch .en").click(function() {
      
      // Enable English
      $('.en_lang').addClass("active-lang");
      
      // Disable Vietnam
      $('.vi_lang').removeClass("active-lang")
      
      // Active or remove the opacity on the flags.
      $('#lang-switch .en').addClass("active-flag");
      $('#lang-switch .vi').removeClass("active-flag");
    });
  });
 
});