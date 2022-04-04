Rails.application.routes.draw do
  resources :posts
  root "site#index"
end
