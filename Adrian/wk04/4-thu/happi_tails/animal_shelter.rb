require 'pry'
require_relative 'animals.rb'
require_relative 'clients.rb'


@clients = {}

@animals = {}

def show_clients
	return @clients.map {|name, properties| "#{name}"}
end

def show_animals
	return @animals.map {|name, properties| "#{name}"}
end

# might want to move above to happi tails

