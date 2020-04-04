Rails.application.routes.draw do
  root to: "contents#index"
  resources :contents, only: [:index, :show]
  resources :profiles, only: :index
end
