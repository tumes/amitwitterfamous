Amitwitterfamous::Application.routes.draw do
  root :to => "main#home"
  
  # match '/:name', :to => 'main#home'
  # match '/tellme/about', :to => 'main#about', :as => 'about'

end
