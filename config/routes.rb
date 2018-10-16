Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    # resources :users, only: [:create, :index, :show, :update]
    resources :users, only: [:create, :show, :index] do
      resources :albums, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index,:show, :edit, :destroy]
  end

  root "static_pages#root"
end
