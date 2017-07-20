Rails.application.routes.draw do

	resources :articles

	get '/api/comments/:id', to: 'api/comments#index'

	# get '/api/comments/:id', to: 'api/articles#show'

	get '/api/articles/:id', to: 'api/articles#show'

end
