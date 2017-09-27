# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

User.destroy_all
demo_user = User.create(email: 'demo', password: 'password', name: 'Guest', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506396470/Screen_Shot_2017-08-13_at_7.07.58_PM_lzxy4q.png")
user2 = User.create(email: 'kenta@gmail.com', password: 'password', name: 'Kenta', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506396470/Screen_Shot_2017-08-13_at_7.07.58_PM_lzxy4q.png")
user3 = User.create(email: 'andres@gmail.com', password: 'password', name: 'Andres')


Location.destroy_all
city1 = Location.create(name: "San Francisco", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506358595/sf2_qwavq5.jpg")
city2 = Location.create(name: "Tokyo", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506313612/tokyo_zzkfp1.jpg")
city3 = Location.create(name: "Boston", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506313612/boston_opan1k.jpg")
city4 = Location.create(name: "Kampot", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506313611/kampot_octstq.jpg")
city5 = Location.create(name: "Barcelona", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506357605/barcelona_jz3w7h.jpg")
city6 = Location.create(name: "Aguascalientes", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506357605/Aguascalientes_b7nyn9.jpg")
city7 = Location.create(name: "Cape Town", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506358817/cape_town_xzspli.jpg")
city8 = Location.create(name: "Budapest", img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506358818/budapest_zegwsu.jpg")



Event.destroy_all
event1 = Event.create(name: 'Halloween',
  host_id: 1,
  address: '160 spear st.',
  date: '2014-08-20',
  hour: '15:30:00',
  occured: true, information: 'this is a party', location_id: 1)
event2 = Event.create(name: 'christmas',
  host_id: 2,
  address: 'fuchu',
  date: '2014-08-20',
  hour: '15:30:00',
  occured: false,
  information: 'this is a party',
  location_id: 2)
event3 = Event.create(name: 'boston marathon',
  host_id: 3,
  address: 'boston commons',
  date: '2014-08-20',
  hour: '15:30:00',
  occured: false,
  information: 'this is a party',
  location_id: 3)



Rsvp.create(attendee_id: 2, event_id: 1)
Rsvp.create(attendee_id: 2, event_id: 3)
Rsvp.create(attendee_id: 3, event_id: 2)
