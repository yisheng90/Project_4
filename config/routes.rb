Rails.application.routes.draw do

  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
delete 'logout' => 'sessions#destroy'



root 'courses#index'
# resources :users
# resources :teachers
resources :registration_confirmation, only: [:show, :update]
resources :courses, only: [:index, :show] do
  resources :videos, only: [:index, :show]
  resources :questions do
    resources :answers, only: [:create, :index]
  end
end
# resources :videos

namespace :teacher do
  resource :dashboard, only: [:show, :update]
  resources :courses, except:[:show] do
    patch 'update_status' => 'courses#update_status'
    resources :videos
  end
end

namespace :admin do
  resources :users, except: [:show]
  resources :categories 
end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
