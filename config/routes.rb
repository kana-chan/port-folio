Rails.application.routes.draw do
  root to: "contents#index"
  resources :contents, only: [:index, :show, :new, :create]
  resources :categories, only: [:new, :create]
  resources :profiles, only: :index
end
