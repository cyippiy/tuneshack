Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    # resources :users, only: [:create, :index, :show, :update]
    resources :users, only: [:create, :show, :index, :update] do
      # post 'upload', on: :collection
      resources :albums, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index,:show, :update, :destroy] do
      resources :songs, only: [:index, :show ,:create]
    end
    resources :songs, only: [:index,:show,:update]
  end

  root "static_pages#root"
end
