Rails.application.routes.draw do
  devise_for :users
  root to: "contents#index"
  resources :contents
  resources :categories, only: [:new, :create, :edit, :update, :destroy]
  resources :profiles, only: :index
end
