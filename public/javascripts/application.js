$(document).ready(function(){

$('input#famebutton').live('click', function() {
  var twitter_name = $("input#fameinput").val();
  $(".spacer").animate({ height: "50px"}, 600);
  $.ajax({
    dataType: "json",
    cache: false,
    url: '/' + twitter_name,
    timeout: 2000,
    success: function(data){
      var fame_level = "<div class='container' id='padded'><h1>" + data + "</h1></div>"
      $(fame_level).hide().appendTo('body').delay(600).fadeIn('slow', function() {
        $('.footer').delay(500).fadeIn(1500)
      });
    }
  });
  return false
});
});