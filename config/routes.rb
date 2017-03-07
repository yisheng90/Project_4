Rails.application.routes.draw do


  get 'registration_confirmation/show'

  # get 'students' => 'students#index'
  # get 'students/new' => 'students#new'
  # post 'students' => 'students#create'
  # get 'students/:id' => 'students#show'
  # get 'admin_dashboard' => 'schools#show'


  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
delete 'logout' => 'sessions#destroy'


root 'courses#index'
# resources :users
# resources :teachers
resources :registration_confirmation, only: [:show, :update]
resources :courses, only: [:index, :show] do
  resources :videos, only: [:index, :show]
end
# resources :videos

namespace :teacher do
  resource :dashboard, only: [:show, :update]
  resources :courses do
    resources :videos, only: [:new, :edit, :create, :destroy]
  end
end

namespace :admin do
  resources :users, except: [:show]
end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
