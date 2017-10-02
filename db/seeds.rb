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
user5 = User.create(email: 'rachel@gmail.com', password: 'password', name: 'Rachel', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552745/Screen_Shot_2017-09-27_at_3.49.26_PM_yngtjc.png")
user6 = User.create(email: 'chris@gmail.com', password: 'password', name: 'Chris', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506552745/Screen_Shot_2017-09-27_at_3.48.38_PM_r7rmki.png")
user7 = User.create(email: 'katrina@gmail.com', password: 'password', name: 'Katrina', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506719750/Screen_Shot_2017-09-29_at_2.14.19_PM_po5smi.png")
user8 = User.create(email: 'marie@gmail.com', password: 'password', name: 'Marie', img_url: "https://res.cloudinary.com/dql6mlrow/image/upload/v1506719758/Screen_Shot_2017-09-29_at_2.15.29_PM_fnswcb.png")

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
event1 = Event.create!(name: 'Spooky Hallowine',
  host_id: demo_user.id,
  address: '160 spear st.',
  date: '2017-10-31',
  hour: '15:30:00',
  occured: true,
  information: 'this is a party',
  location_id: city1.id)
event2 = Event.create!(name: 'Xmas Wine',
  host_id: user2.id,
  address: 'Shinjuku',
  date: '2016-12-25',
  hour: '15:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city2.id)
event3 = Event.create!(name: 'Boston Wine Party',
  host_id: user3.id,
  address: 'Boston Commons',
  date: '2017-08-30',
  hour: '09:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city3.id)
event4 = Event.create!(name: 'French Wine Party',
  host_id: user4.id,
  address: 'Pumpkin Square',
  date: '2017-12-09',
  hour: '12:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city4.id)
event5 = Event.create!(name: 'Wine and Tapas',
  host_id: user5.id,
  address: 'Toro Bar',
  date: '2017-09-24',
  hour: '19:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city5.id)
event6 = Event.create!(name: 'El Wino',
  host_id: user6.id,
  address: "Plaza centro",
  date: '2018-01-23',
  hour: '09:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city6.id)
event7 = Event.create!(name: 'Biltong and Wine',
  host_id: user7.id,
  address: 'Tabletop Mountain',
  date: '2017-10-01',
  hour: '23:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city7.id)
event8 = Event.create!(name: 'Hungary Thirsty',
  host_id: user8.id,
  address: 'Szimpla',
  date: '2017-10-08',
  hour: '22:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city8.id)
event9 = Event.create!(name: 'Tech and Wine',
  host_id: demo_user.id,
  address: 'City Plaza',
  date: '2017-11-29',
  hour: '18:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city1.id)
event10 = Event.create!(name: 'Bar Hopper',
  host_id: user3.id,
  address: '1755 Mass Ave',
  date: '2017-11-29',
  hour: '18:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city3.id)
event11 = Event.create!(name: 'FC Wine',
  host_id: user5.id,
  address: 'Via Catalonia',
  date: '2017-12-11',
  hour: '19:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city5.id)
event12 = Event.create!(name: 'Rugby and drink',
  host_id: user7.id,
  address: 'Tabletop Mountain',
  date: '2017-12-15',
  hour: '19:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city7.id)
event13 = Event.create!(name: 'Hungary Hippo',
  host_id: user8.id,
  address: 'Morrisons',
  date: '2017-04-03',
  hour: '20:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city8.id)
event14 = Event.create!(name: 'St. Pattys',
  host_id: user7.id,
  address: 'Szimpla',
  date: '2017-03-20',
  hour: '07:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city7.id)
event15 = Event.create!(name: 'Cinco de Mayo',
  host_id: user6.id,
  address: 'TBD',
  date: '2017-05-05',
  hour: '19:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city6.id)
event16 = Event.create!(name: 'Communion Wine',
  host_id: user5.id,
  address: 'Sagrada Familia',
  date: '2017-12-25',
  hour: '19:00:00',  occured: false,
  information: 'this is a party',
  location_id: city5.id)
event17 = Event.create!(name: 'Wine and Pork',
  host_id: user4.id,
  address: "Mike's bar",
  date: '2017-04-20',
  hour: '14:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city4.id)
event18 = Event.create!(name: 'Gaudi Wine',
  host_id: user5.id,
  address: 'Szimpla',
  date: '2017-04-20',
  hour: '20:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city5.id)
event19 = Event.create!(name: 'My BDay!',
  host_id: user6.id,
  address: '99 Gatos',
  date: '2017-12-30',
  hour: '19:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city6.id)
event20 = Event.create!(name:'Wedding Party',
  host_id: user7.id,
  address: 'Highway 163',
  date: '2017-02-14',
  hour: '21:30:00',
  occured: false,
  information: 'this is a party',
  location_id: city7.id)
event21 = Event.create!(name: 'Graduation Party',
  host_id: user8.id,
  address: 'Metro West',
  date: '2017-06-20',
  hour: '13:00:00',
  occured: false,
  information: 'this is a party',
  location_id: city8.id)



Rsvp.create!(attendee_id: demo_user.id, event_id: city1.id)
Rsvp.create!(attendee_id: user2.id, event_id: event3.id)
Rsvp.create!(attendee_id: user2.id, event_id: event4.id)
Rsvp.create!(attendee_id: user2.id, event_id: event5.id)
Rsvp.create!(attendee_id: user2.id, event_id: event6.id)
Rsvp.create!(attendee_id: user2.id, event_id: event7.id)
Rsvp.create!(attendee_id: user3.id, event_id: event8.id)
Rsvp.create!(attendee_id: user3.id, event_id: event1.id)
Rsvp.create!(attendee_id: user3.id, event_id: event5.id)
Rsvp.create!(attendee_id: user3.id, event_id: event2.id)
Rsvp.create!(attendee_id: user4.id, event_id: event8.id)
Rsvp.create!(attendee_id: user4.id, event_id: event7.id)
Rsvp.create!(attendee_id: user4.id, event_id: event6.id)
Rsvp.create!(attendee_id: user4.id, event_id: event5.id)
Rsvp.create!(attendee_id: user4.id, event_id: event4.id)
Rsvp.create!(attendee_id: user3.id, event_id: event2.id)
Rsvp.create!(attendee_id: user5.id, event_id: event1.id)
Rsvp.create!(attendee_id: user5.id, event_id: event2.id)
Rsvp.create!(attendee_id: user5.id, event_id: event3.id)
Rsvp.create!(attendee_id: user5.id, event_id: event4.id)
Rsvp.create!(attendee_id: user5.id, event_id: event5.id)
Rsvp.create!(attendee_id: user6.id, event_id: event6.id)
Rsvp.create!(attendee_id: user6.id, event_id: event7.id)
Rsvp.create!(attendee_id: user6.id, event_id: event8.id)
Rsvp.create!(attendee_id: user6.id, event_id: event1.id)
Rsvp.create!(attendee_id: user7.id, event_id: event7.id)
Rsvp.create!(attendee_id: user7.id, event_id: event6.id)
Rsvp.create!(attendee_id: user7.id, event_id: event5.id)
Rsvp.create!(attendee_id: user7.id, event_id: event4.id)
Rsvp.create!(attendee_id: user8.id, event_id: event3.id)
Rsvp.create!(attendee_id: user8.id, event_id: event2.id)
Rsvp.create!(attendee_id: user8.id, event_id: event1.id)
Rsvp.create!(attendee_id: user8.id, event_id: event4.id)
