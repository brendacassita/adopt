Rails.application.routes.draw do
  get 'liked_pets/api/liked_pets'
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do

    get 'my_pets', to:'pets#my_pets'
    get 'adopted_pets', to: 'pets#adopted_pets'
    resources :pets 
    resources :liked_pets 


    put 'update_liked', to:'pets#update_liked'
      
    
  end
end
