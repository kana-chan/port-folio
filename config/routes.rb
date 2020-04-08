Rails.application.routes.draw do
  root to: "contents#index"
  resources :contents
  resources :categories, only: [:new, :create, :edit, :update, :destroy]
  resources :profiles, only: :index
end
