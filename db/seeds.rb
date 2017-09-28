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
user2 = User.create(email: 'kenta@gmail.com', password: 'password', name: 'Kenta', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552199/dwight_copy_lj6rya.png")
user3 = User.create(email: 'andres@gmail.com', password: 'password', name: 'Andres', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552013/Screen_Shot_2017-09-01_at_9.23.47_AM_ha8cev.png")
user4 = User.create(email: 'ronald@gmail.com', password: 'password', name: 'Ronald', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552745/Screen_Shot_2017-09-27_at_3.51.03_PM_j9zlkx.png")
user5 = User.create(email: 'fiona@gmail.com', password: 'password', name: 'Fiona', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552745/Screen_Shot_2017-09-27_at_3.49.26_PM_yngtjc.png")
user6 = User.create(email: 'rachel@gmail.com', password: 'password', name: 'Rachel', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552745/Screen_Shot_2017-09-27_at_3.48.38_PM_r7rmki.png")


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
event1 = Event.create!(name: 'Halloween',
  host_id: demo_user.id,
  address: '160 spear st.',
  date: '2017-08-20',
  hour: '15:30:00',
  occured: true,
  information: 'this is a party',
  location_id: city1.id)
event2 = Event.create!(name: 'Xmas Wine',
  host_id: user2.id,
  address: 'fuchu',
  date: '2017-09-20',
  hour: '15:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city2.id)
event3 = Event.create!(name: 'Boston Wine Party',
  host_id: user3.id,
  address: 'boston commons',
  date: '2017-08-30',
  hour: '09:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city3.id)
event4 = Event.create!(name: 'Harvard Wine Party',
  host_id: user4.id,
  address: 'boston commons',
  date: '2017-10-20',
  hour: '12:00:00',
  occured: false,
  information: 'this is a party',
  location_id: 3)
event5 = Event.create!(name: 'French Wine Party',
  host_id: user5.id,
  address: 'boston commons',
  date: '2017-08-20',
  hour: '19:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city4.id)
event6 = Event.create!(name: 'Cambodian Fest',
  host_id: user6.id,
  address: "O'neil's",
  date: '2017-08-20',
  hour: '09:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city4.id)
event7 = Event.create!(name: 'Sushi and Wine',
  host_id: user2.id,
  address: 'Shibuya Scramble',
  date: '2017-08-20',
  hour: '23:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city2.id)
event8 = Event.create!(name: 'Giants and Wine',
  host_id: demo_user.id,
  address: 'AT&T Park',
  date: '2017-10-20',
  hour: '22:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city1.id)
event9 = Event.create!(name: 'El Wino',
  host_id: demo_user.id,
  address: 'City Plaza',
  date: '2017-11-29',
  hour: '18:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city6.id)
event10 = Event.create!(name: 'Hungary or thirsty?',
  host_id: user3.id,
  address: 'Szimpla',
  date: '2017-04-20',
  hour: '19:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city8.id)



Rsvp.create!(attendee_id: user2.id, event_id: city1.id)
Rsvp.create!(attendee_id: user2.id, event_id: city3.id)
Rsvp.create!(attendee_id: city3.id, event_id: city2.id)
