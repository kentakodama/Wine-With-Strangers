# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

User.destroy_all
demo_user = User.create(email: 'demo', password: 'password', name: 'Guest')
user2 = User.create(email: 'kenta@gmail.com', password: 'password', name: 'Kenta')
user3 = User.create(email: 'andres@gmail.com', password: 'password', name: 'Andres')


Location.destroy_all
city1 = Location.create(name: "San Francisco")
city2 = Location.create(name: "Tokyo")
city3 = Location.create(name: "Boston")
city4 = Location.create(name: "Kampot")

Event.destroy_all
event1 = Event.create(name: 'Halloween',
  host_id: 1,
  address: '160 spear st.',
  time: DateTime.new(2007,11,19,8,37,48),
  occured: true, information: 'this is a party', location_id: 1)
event2 = Event.create(name: 'christmas',
  host_id: 2,
  address: 'fuchu',
  time: DateTime.new(2007,11,19,8,37,48),
  occured: false,
  information: 'this is a party',
  location_id: 2)
event3 = Event.create(name: 'boston marathon',
  host_id: 3,
  address: 'boston commons',
  time: DateTime.new(2007,11,19,8,37,48),
  occured: false,
  information: 'this is a party',
  location_id: 3)


Rsvp.create(attendee_id: 2, event_id: 1)
Rsvp.create(attendee_id: 2, event_id: 3)
Rsvp.create(attendee_id: 3, event_id: 2)
