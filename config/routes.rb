Rails.application.routes.draw do
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :locations, only: [:index, :show, :create]
    resources :events, only: [:show, :create, :index]
    resources :rsvps, only: [:create, :destroy]
  end

end
