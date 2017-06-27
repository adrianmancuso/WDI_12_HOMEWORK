
require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

get '/' do
  erb :index
end

def run_sql(sql)
	conn = PG.connect(dbname: 'movies_database')
	result = conn.exec(sql)
	conn.close
	result
end

get '/search_results' do 
	@search_string = params[:movie_search]
	@returned_results = search(@search_string)
	erb :search_results
end

get '/database/:title' do
	@movie = params[:title]
	check_db = run_sql("select * from movies where name = '#{@movie}';")
		if check_db.count > 0
			binding.pry
		end
	@movie_details = get_title(@movie)
	plot = @movie_details["Plot"].gsub("'", "")
	run_sql("insert into movies (name, year, plot, director, image_url) values ('#{@movie_details['Title']}', #{@movie_details['Year'].to_i}, '#{plot}', '#{@movie_details['Director']}', '#{@movie_details['Poster']}');")
	# binding.pry
	erb :movie_page
end

def get_title(title)
	@result = HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&t=' + title.to_s)
end

def search(search_data)
	@results = HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&s=' + search_data)["Search"]
end

