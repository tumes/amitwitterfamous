require 'spec_helper'

describe MainController do
  render_views
  
  describe "GET 'home'" do
    
    it "should be successful" do
      get :home
      response.should be_success
    end
  end
  
  describe "GET 'home' with empty params" do
    
    
    it "should have an input for a twitter username" do
      get :home
      response.should have_selector("input[name='name'][type='text']")
    end
  end

end
