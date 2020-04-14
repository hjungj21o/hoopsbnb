Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :bookings, only: [:index]
    end
    resources :arenas, only: [:create, :index, :show] do
      resources :reviews, only: [:index, :create, :update, :destroy]
    end
    
    resources :bookings, only: [:show, :create, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
