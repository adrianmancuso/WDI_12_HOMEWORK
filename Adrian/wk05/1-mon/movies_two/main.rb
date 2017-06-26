
require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/search_results' do 
	@search_string = params[:movie_search]
	@returned_results = search(@search_string)
	erb :search_results
end

get '/database/:title' do
	@movie = params[:title]
	@movie_details = get_title(@movie)
	erb :movie_page
end

def get_title(title)
	@result = HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&t=' + title.to_s)
end

def search(search_data)
	@results = HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&s=' + search_data)["Search"]
end

