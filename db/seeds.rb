# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Arena.destroy_all
# Booking.destroy_all
# Review.destroy_all
User.destroy_all

u1 = User.create(username: "ballislife", password: "starwars123", email: "ballislife@gmail.com", first_name: "Haejun", last_name: "Chung")
u2 = User.create(username: "thegoat23", password: "chicagobulls", email: "thegoat23@airjordan.com", first_name: "Michael", last_name: "Jordan")
u3 = User.create(username: "earthisflat", password: "brooklynnets", email: "kyrieirving@brooklynnets.com", first_name: "Kyrie", last_name: "Irving")
u4 = User.create(username: "halfcourt3", password: "goldenstate", email: "stephencurry30@gsw.com", first_name: "Stephen", last_name: "Curry")
u5 = User.create(username: "eurosteps", password: "houstonrockets", email: "jamesharden@houston.com", first_name: "James", last_name: "Harden")


# r1 = Review.create()
# r2 = Review.create()

# b1 = Booking.create(hooper_id: mj.id, arena_id: a1.id, date: 2020-05-21, start_time: 16:00, end_time: 20:00)
# b2 = Booking.create(hooper_id: ki.id, arena_id: a2.id, date: 2020-02-21, start_time: 16:00, end_time: 20:00)

# a1 = Arena.create(address: "333 East Trade Street", city: "Charlotte", owner_id: mj.id, price: 3000)
# a2 = Arena.create(address: "291 Murray Ave", city: "Englewood", owner_id: hj.id, price: 10)
# a3 = Arena.create(address: "West 4th Street Courts", city: "New York", owner_id: )