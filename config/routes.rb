Rails.application.routes.draw do
  root 'genres#index'
  resources :genres, :subgenres, :outputs
end
