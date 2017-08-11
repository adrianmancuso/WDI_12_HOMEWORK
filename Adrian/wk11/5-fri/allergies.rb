require "pry"

class Allergies

  @@allergy_hash = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128
  }

  def initialize allergy_score
     @score = allergy_score
     @list = find_allergens
   end 

   def find_allergens    
     @list = []
     
     while @score > 1 do
      revised_hash = @@allergy_hash.keep_if { |key, value| value < @score }
      item = revised_hash.max_by { |key, value| value }
      @list.push item[0].to_s 
      @score -= item[1]
     end

     @list

   end


   def list
    @list
   end
   
   def allergic_to? item
    @list.include? item
   end

end

tom = Allergies.new(192)

binding.pry

var s = 98
# note: find_allergens method in broken and seems to find eggs multiple times