Rails.application.routes.draw do
  root to: "contents#top"
  resources :contents, only: :index
end
