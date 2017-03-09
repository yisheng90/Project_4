# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
['Chinese', 'Science', 'Maths', 'Geography', 'English'].each do |category|
  Category.find_or_create_by(category: category)
end

['sec_1', 'sec_2', 'sec_3', 'sec_4'].each do |grade|
  Grade.find_or_create_by(grade: grade)
end
