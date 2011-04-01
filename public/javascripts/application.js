$(document).ready(function(){
  
  result_appender = function(fame_level){
    $(fame_level).hide().appendTo('body').delay(600).fadeIn('slow', function() {
      $('.footer').delay(200).fadeIn(900)
    });
  };

  var active_twitter_name = ""

$('input#famebutton').live('click', function() {
  var twitter_name = $("input#fameinput").val();
    if (twitter_name == "") {
      result_appender("please enter a twitter username")
    }
    else if (twitter_name != active_twitter_name) {
      $(".container#padded").fadeOut(300);
      $(".spacer").animate({ height: "50px"}, 600);
        $.ajax({
          dataType: "json",
          cache: false,
          url: '/' + twitter_name,
          timeout: 5000,
          success: function(data){
            var fame_level = "<div class='container' id='padded'><h1>" + data + "</h1></div>"
            result_appender(fame_level)
            active_twitter_name = twitter_name
          }
        });
    };  
    return false
  });
});