# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Arena.destroy_all
# Booking.destroy_all
# Review.destroy_all
User.destroy_all

u1 = User.create(username: "ballislife", password: "starwars123", email: "ballislife@gmail.com", first_name: "Haejun", last_name: "Chung")
u2 = User.create(username: "thegoat23", password: "chicagobulls", email: "thegoat23@airjordan.com", first_name: "Michael", last_name: "Jordan")
u3 = User.create(username: "earthisflat", password: "brooklynnets", email: "kyrieirving@brooklynnets.com", first_name: "Kyrie", last_name: "Irving")
u4 = User.create(username: "halfcourt3", password: "goldenstate", email: "stephencurry30@gsw.com", first_name: "Stephen", last_name: "Curry")
u5 = User.create(username: "eurosteps", password: "houstonrockets", email: "jamesharden@houston.com", first_name: "James", last_name: "Harden")
u6 = User.create(username: "shaqtinafool", password: "shaqisadj", email:"shaq@shaqtinafool.com", first_name: "Shaq", last_name: "O'neal")

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

a1.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/spectrum_arena_index.jpg"), filename: "spectrum_arena_index.jpg")

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

a2.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/driveway_hoops_index.jpg"), filename: "driveway_hoops_index.jpg")

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

a3.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/the_cage_index.jpg"), filename: "the_cage_index.jpg")

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

a4.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/venice_beach_index.jpg"), filename: "venice_beach_index.jpg")

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

a5.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/central_park_index.jpg"), filename: "central_park_index.jpg")

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

a6.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/dyckman_park_index.jpg"), filename: "dyckman_park_index.jpg")

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

a7.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/rucker_park_index.jpg"), filename: "rucker_park_index.jpg")

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

a8.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/td_garden_index.jpg"), filename: "td_garden_index.jpg")

a9 = Arena.create(
    name: "Heart of New York - MSG!",
    address: "4 Pennsylvania Plaza",
    city: "New York", 
    gm_id: u6.id, 
    price: 10000, 
    lat: 40.7502277, 
    lng: -73.994853,
    description: "Madison Square Garden, colloquially known as The Garden or 
    in initials as MSG, is a multi-purpose indoor arena in New York City. 
    Located in Midtown Manhattan between 7th and 8th Avenues from 31st to 
    33rd Streets, it is situated atop Pennsylvania Station."
)

a9.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/msg_index.jpg"), filename: "msg_index.jpg")

a10 = Arena.create(
    name: "Take Flight @ Jordan Terminal 23",
    address: "145 W 32nd St",
    city: "New York", 
    gm_id: u2.id, 
    price: 900, 
    lat: 40.7493709, 
    lng: -73.992554,
    description: "Jordan Brand built a unique consumer space dubbed Terminal 23 
    in the once famous Cafe Rouge just across the street from Madison Square 
    Garden at New York’s Hotel Pennsylvania. Strap in, and take flight."
)

a10.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/jordan_terminal_23_index.jpg"), filename: "jordan_terminal_23_index.jpg" )

a11 = Arena.create(
    name: "The Home of the Brooklyn Nets",
    address: "620 Atlantic Ave",
    city: "Brooklyn", 
    gm_id: u3.id, 
    price: 6500, 
    lat: 40.6826465, 
    lng: -73.9776043,
    description: "In the heart of Brooklyn, at the crossroads of Atlantic 
    and Flatbush Avenues, Barclays Center is setting a new standard as the 
    showcase venue for the world's most thrilling entertainment and sports 
    events."
)

a11.photos.attach(io: open("https://hoopsbnb-seed.s3.amazonaws.com/bk_nets_index.jpg"), filename: "bk_nets_index.jpg")



# r1 = Review.create()
# r2 = Review.create()

# b1 = Booking.create(hooper_id: mj.id, arena_id: a1.id, date: 2020-05-21, start_time: 16:00, end_time: 20:00)
# b2 = Booking.create(hooper_id: ki.id, arena_id: a2.id, date: 2020-02-21, start_time: 16:00, end_time: 20:00)
