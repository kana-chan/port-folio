Rails.application.routes.draw do
  root to: "contents#index"
  resources :contents
  resources :categories, only: [:new, :create]
  resources :profiles, only: :index
end
