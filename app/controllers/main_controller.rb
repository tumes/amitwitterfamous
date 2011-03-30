class MainController < ApplicationController
  
  def home
    if params[:name].blank?
    else
      name = params[:name]
      url = "http://twitter.com/users/show/" + name + ".json"
      result = HTTParty.get(url)
      if result.to_s.include? "Not found"
        redirect_to root_path
      else
        followers = result.fetch("followers_count")
        following = result.fetch("friends_count")
        if followers > 250000
          fame_level = "you are a twitter superstar"
        else
          fame_level = "no"
        end
        @fame_level = fame_level
      end
    end
  end
  
end

