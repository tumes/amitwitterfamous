class MainController < ApplicationController
  
  def home
    if params[:name].blank?
    else
      name = params[:name]
      url = make_url(name)
      user_info = grab_userpage(url)
      if user_info.header.to_s.include? "HTTPNotFound"
        redirect_to root_path
      else
        @fame_level = evaluate_fame(user_info)
      end
    end
  end
  
  private
    
    def make_url(name)
      "http://twitter.com/users/show/" + name + ".json"
    end
    
    def grab_userpage(url)
      HTTParty.get(url)
    end
    
    def evaluate_fame(user_info)
      followers = user_info.fetch("followers_count")
      following = user_info.fetch("friends_count")
      if followers > 250000
        "you are a twitter superstar"
      elsif (followers > 10000) && (followers < 250000)
        "yes"
      elsif (followers - following).abs < (0.1*followers + 0.1*following).ceil
        "you are breaking even"
      elsif (following) > (10*followers)
        "you are inversely twitter famous"
      else
        "no"
      end
    end
  
end

