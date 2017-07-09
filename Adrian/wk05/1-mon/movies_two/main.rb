
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
	@returned_data = search(@search_string)
	@returned_data.each do |result|
		# check_db = run_sql("select distinct * from movies where title = '#{result['Title']}';")
		# 	if check_db > 0
				
		# 	end
		# binding.pry
		# search does not return plot or director, removed. caused conflict with checkdb function
		run_sql("insert into movies (title, year, poster) values ('#{result['Title'].gsub("'", "''")}', #{result['Year'].to_i}, '#{result['Poster']}');")
		end
		@returned_results = @returned_data
	erb :search_results
end

get '/database/:title' do
	@movie = params[:title]
	check_db = run_sql("select distinct * from movies where title = '#{@movie}';")
		if check_db.count > 0
			@movie_details = check_db[0]
		else
			@movie_details = get_title(@movie)
			plot = @movie_details["Plot"].gsub("'", "''")
			run_sql("insert into movies (title, year, plot, director, poster) values ('#{@movie_details['Title'].gsub("'", "''")}', #{@movie_details['Year'].to_i}, '#{plot}', '#{@movie_details['Director']}', '#{@movie_details['Poster']}');")
		end
	erb :movie_page
end

def get_title(title)
	@result = HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&t=' + title.to_s)
end

def search(search_data)
	@results = HTTParty.get('http://www.omdbapi.com/?apikey=2f6435d9&s=' + search_data)["Search"]
end

