$(document).ready(function(){
  
  result_appender = function(fame_level){
    $(".container#padded").fadeOut(300);
    $(fame_level).hide().appendTo('body').delay(600).fadeIn('slow', function() {
      $('.footer').delay(200).fadeIn(900)
    });
  };

  var active_twitter_name = ""

$('input#famebutton').live('click', function() {
  var sanitized_name = $("input#fameinput").val().replace(/[^\w]+/, '')
  $("input#fameinput").val(sanitized_name)
    if (sanitized_name == "") {
      result_appender("<div class='container' id='padded'><h1>" + "please enter a valid twitter username" + "</h1></div>")
    }
    else if (sanitized_name != active_twitter_name) {
      $(".spacer").animate({ height: "50px"}, 600);
      var url = 'http://twitter.com/users/show/' + sanitized_name + '.json'
        $.ajax(url, {
          crossDomain: true,
          dataType: "jsonp",
          timeout: 5000,
          error: function() {
            result_appender("<div class='container' id='padded'><h1>" + "that username does not exist" + "</h1></div>")
          },
          success: function(data, text, xhqr){
            var followers = data.followers_count
            var following = data.friends_count
            var fame_result = ''
            if (followers >= 250000) {
              fame_result = 'you are a twitter superstar'
            } else if (followers >= 10000 && followers < 250000) {
              fame_result = 'yes'
            } else if (followers >= 1000 && followers < 10000) {
              fame_result = "you're getting there"
            } else if (following > 10*followers) {
              fame_result = "you're inversely twitter famous"
            } else {
              fame_result = 'no'
            }
            var fame_level = "<div class='container' id='padded'><h1>" + fame_result + "</h1></div>"
            result_appender(fame_level)
            active_twitter_name = sanitized_name
          }
        });
    };  
    return false
  });
});