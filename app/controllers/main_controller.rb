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
        if followers > 250000
          result = "yes"
        else
          result = "no"
        end
        @results = result
      end
    end
  end
  
end

