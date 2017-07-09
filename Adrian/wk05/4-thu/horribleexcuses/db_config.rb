require "active_record"

options = {
	adapter: 'postgresql',
	database: 'excuses',
	username: 'mancuso'
}

ActiveRecord::Base.establish_connection(options)