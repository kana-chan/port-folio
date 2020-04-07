Rails.application.routes.draw do
  root to: "contents#index"
  resources :contents, only: [:index, :show, :new, :create, :edit, :update]
  resources :categories, only: [:new, :create]
  resources :profiles, only: :index
end
