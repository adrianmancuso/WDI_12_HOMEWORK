require "pry"

card_pack = [
	{:name => :Pikachu, :attack => 40},
	{:name => :Rattata, :attack => 20}, 
	{:name => :Pidgeot, :attack => 60}, 
	{:name => :Alakazam, :attack => 80}, 
	{:name => :Butterfree, :attack => 30}, 
	{:name => :Gengar, :attack => 70}, 
	{:name => :Moltres, :attack => 100}, 
	{:name => :Vulpix, :attack => 40}, 
	{:name => :Blastoise, :attack => 80}, 
	{:name => :Hitmonchan, :attack => 50}, 
]

card_pack.reverse!
pile_one = card_pack.slice!(0,3)
pile_two = card_pack.slice!(0,3)
@pile_three = card_pack.slice!(0,3)
@pile_four = card_pack.slice(0)

@alfred_pocket = [].concat pile_one
@peter_pocket = [].concat pile_two

# card pack each slice 3 .to_a
# could have kept all piles as one array with sub arrays

#could have stored alfred and peter in a hash

def arm_wrestle
	chance_of_winning = rand
# using ternary ops  rand > 0.5 ? 'hello' : 'non' // can use flatten

	if chance_of_winning < 0.5
		@alfred_pocket.concat @pile_three
		@peter_pocket.push @pile_four
	else
		@peter_pocket.concat @pile_three
		@alfred_pocket.push @pile_four
	end
end

arm_wrestle

puts "Peter has the following cards:"
puts "#{@peter_pocket.each {|key| puts key}}"
puts "Alfred has the following cards: "
puts "#{@alfred_pocket.each {|key| puts key}}"

# binding.pry