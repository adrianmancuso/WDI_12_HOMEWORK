create table movies(
	id serial4 primary key,
	name varchar(400),
	year integer,
	-- year varchar(15), change this
	plot varchar(800),
	director varchar(200),
	image_url text
);

insert into movies(name, year, plot, director, image_url) values ('Star Wars', 1977, 'Guy seeks revenge', 'George Lucas', 'http://google.com');