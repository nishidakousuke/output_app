Rails.application.routes.draw do
  root 'covers#index'
  resources :covers
end
