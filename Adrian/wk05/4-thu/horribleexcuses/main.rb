require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

require_relative 'db_config'
require_relative 'models/excuse'

get '/' do
  erb :index
end

get '/excuses/new' do
	erb :new
end

post '/excuses' do

end



