Rails.application.routes.draw do
  root 'genres#index'
  get 'outputs/search'
  resources :genres, :subgenres, :outputs
end
