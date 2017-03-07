Rails.application.routes.draw do

  get 'students' => 'students#index'
  get 'students/new' => 'students#new'
  post 'students' => 'students#create'

  get 'students/:id' => 'students#show'

  # get 'teachers' => 'teachers#index'
  # get 'teachers/:id' => 'teachers#show'
  # get 'new_teacher' => 'teachers#new'
  # post 'new_teacher' => 'teachers#create'



  get 'admin_dashboard' => 'schools#show'


  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
delete 'logout' => 'sessions#destroy'


root 'courses#index'
resources :users
resources :teachers
resources :courses, only: [:index, :show] do
  resources :videos, only: [:index, :show]
end
# resources :videos

namespace :teacher do
  resource :dashboard, only: [:show]
  resources :courses
end

namespace :admin do
  resources :users, except: [:show]
end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
