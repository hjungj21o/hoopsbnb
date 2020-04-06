Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:show, :create, :destroy, :update, :patch]
    end
    resources :arenas, only: [:create, :show] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
    
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
