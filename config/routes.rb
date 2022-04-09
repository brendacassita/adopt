Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do

    get 'my_pets', to:'pets#my_pets'
    resources :pets do

      
    end
  end
end
