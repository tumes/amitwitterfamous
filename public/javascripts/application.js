$(document).ready(function(){
  
  result_appender = function(fame_level){
    $(fame_level).hide().appendTo('body').delay(600).fadeIn('slow', function() {
      $('.footer').delay(500).fadeIn(1500)
    });
  };

  var active_twitter_name = ""

$('input#famebutton').click( function() {
  var twitter_name = $("input#fameinput").val();
    if (twitter_name != active_twitter_name) {
      $(".container#padded").fadeOut(300);
      $(".spacer").animate({ height: "50px"}, 600);
        $.ajax({
          dataType: "json",
          cache: false,
          url: '/' + twitter_name,
          timeout: 2000,
          success: function(data){
            var fame_level = "<div class='container' id='padded'><h1>" + data + "</h1></div>"
            result_appender(fame_level)
            active_twitter_name = twitter_name
          }
        });
    }
    else {
    };  
    return false
  });
});