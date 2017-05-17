Rails.application.routes.draw do

  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :audiobooks
  end
end
