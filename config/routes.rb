Amitwitterfamous::Application.routes.draw do
  root :to => "main#home"
  
  match '/:name', :to => 'main#home'

end
