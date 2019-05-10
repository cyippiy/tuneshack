Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    # resources :users, only: [:create, :index, :show, :update]
    resources :users, only: [:create, :show, :index, :update] do
      collection do
        get :search
      end
      resources :albums, only: [:index, :create] do 
        collection do
          get :search
        end
      end
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index,:show, :update, :destroy] do
      resources :songs, only: [:index, :show ,:create]
        collection do
          get :search
        end
    end
    resources :songs, only: [:index,:show,:update] do
      collection do
        get :search
      end
    end
  end

  root "static_pages#root"
end
