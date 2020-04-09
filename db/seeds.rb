# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Arena.destroy_all
# Booking.destroy_all
# Review.destroy_all
User.destroy_all

u1 = User.create(username: "ballislife", password: "starwars123", email: "ballislife@gmail.com", first_name: "Haejun", last_name: "Chung")
u2 = User.create(username: "thegoat23", password: "chicagobulls", email: "thegoat23@airjordan.com", first_name: "Michael", last_name: "Jordan")
u3 = User.create(username: "earthisflat", password: "brooklynnets", email: "kyrieirving@brooklynnets.com", first_name: "Kyrie", last_name: "Irving")
u4 = User.create(username: "halfcourt3", password: "goldenstate", email: "stephencurry30@gsw.com", first_name: "Stephen", last_name: "Curry")
u5 = User.create(username: "eurosteps", password: "houstonrockets", email: "jamesharden@houston.com", first_name: "James", last_name: "Harden")

a1 = Arena.create(
    name: "Spectrum Arena",
    address: "333 East Trade Street", 
    city: "Charlotte", 
    gm_id: u2.id, 
    price: 3000, 
    lat: 35.225256, 
    lng: -80.839583,
    description: "Home of the Charlotte Hornets - Inspired by the event, 
    the city, and the fans, the arena’s 
    design is a celebration of gathering. 
    Open walkways, terraces, and exposed staircases encourage conversation and 
    exchange between arena guests in all areas of the building, providing 
    connectivity of and creating community."
)
a2 = Arena.create(
    name: "Your trusty local neighborhood basketball hoop",
    address: "291 Murray Ave", 
    city: "Englewood", 
    gm_id: u1.id, 
    price: 10, 
    lat: 40.909594, 
    lng: -73.981292,
    description: "An old but trustworthy basketball hoop that has been in the family for a decade.
    All we ask is that you don't try to dunk, "
)
a3 = Arena.create(
    name: "Welcome to the Cage!",
    address: "320 6th Ave", 
    city: "New York", 
    gm_id: u5.id, 
    price: 30, 
    lat: 40.731376, 
    lng: -74.0031323,
    description: "Named for the metal fencing that encloses the basketball court, 
    Manhattan's 'The Cage' court sits on West 4th Street in Greenwich Village. 
    Unlike the other courts on this list, The Cage is primarily known for its 
    non-regulation size—adding emphasis to the physicality of the game."
)
a4 = Arena.create(
    name: "Beach, Boardwalk, Basketball @ Venice",
    address: "1708 Ocean Front Walk",
    city: "Venice", 
    gm_id: u4.id, 
    price: 600, 
    lat: 33.9857132, 
    lng: -118.4737105,
    description: "Aside from the classic Woody Harrelson and Wesley Snipes flick, 
    the Venice courts are most famous for random NBA superstar sightings like 
    Dwight Howard and Blake Griffin and for the massive summer tournament 
    that is held annually."
)
a5 = Arena.create(
    name: "Play bball at the heart of Central Park",
    address: "Great Lawn Oval",
    city: "New York", 
    gm_id: u3.id, 
    price: 55,
    lat: 40.7812648, 
    lng: -73.9677283,
    description: "The most popular basketball spot in New York’s backyard 
    is on the Great Lawn just north of the baseball fields."
)
a6 = Arena.create(
    name: "Come do some windmills and impress the crowd!",
    address: "Nagle Ave & W 204th Street", 
    city: "New York", 
    gm_id: u4.id, 
    price: 100, 
    lat: 40.8628381, 
    lng: -73.9228539,
    description: "Crashing the boards at this Inwood institution isn’t for newbies. 
    Come summertime, the park even attracts a fair amount of college and even pro players."
)
a7 = Arena.create(
    name: "Get your professional contract here",
    address: "280 W 155th St",
    city: "New York", 
    gm_id: u4.id, 
    price: 1000,
    lat: 40.8291747, 
    lng: -73.9383153,
    description: "Rucker Park is without a doubt the most famous basketball 
    court on the planet. Located off 155th and Harlem River Drive in Upper 
    Manhattan, Holcombe Rucker Park was once the most popular basketball 
    court for amateur basketball players to showcase their talent 
    in an effort to land a professional contract." 
)
a8 = Arena.create(
    name: "Play on the classic parquet floors, or watch a movie on the Jumbotron",
    address: "1708 Ocean Front Walk",
    city: "Boston", 
    gm_id: u2.id, 
    price: 7500, 
    lat: 33.9857132, 
    lng: -118.4737105,
    description: "The award-winning state-of-the-art TD Garden is a year-round, 
    19,600-seat arena with a multi-million dollar high definition video scoreboard 
    and complete 360-degree LED technology."
)


# r1 = Review.create()
# r2 = Review.create()

# b1 = Booking.create(hooper_id: mj.id, arena_id: a1.id, date: 2020-05-21, start_time: 16:00, end_time: 20:00)
# b2 = Booking.create(hooper_id: ki.id, arena_id: a2.id, date: 2020-02-21, start_time: 16:00, end_time: 20:00)
