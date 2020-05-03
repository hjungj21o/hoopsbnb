# README

![logo](https://user-images.githubusercontent.com/57606555/79589742-e77d6200-80a3-11ea-81cc-77c91e0f445b.png)


## Hoopsbnb

`Hoopsbnb` is an online marketplace application that lets its users offer and use basketball courts all around the world. It is a functional clone of Airbnb.

## Live Demo
[View the Live Demo Here](https://hoopsbnb.herokuapp.com/#/)


## Technologies Used
`Hoopsbnb` is built with `Ruby on Rails` and `PostgreSQL` on the backend and utilizes `JavaScript`, `React and Redux` for  the frontend state management. To render maps on the application, Google Maps API is used. Styling and transitions are predominantly done using CSS. Live demo of `Airbnb` is deployed on Heroku and static assets are stored in AWS.


## Features
### 1. User Authentication
Users are able to sign up and log in via a modal. If any validations fails, custom errors are displayed back to the user. Demo log in feature is provided to bypass the sign up process. Upon creating an account using valid credentials, users can make a reservation and view their upcoming reservations.

### 2. Google Maps Filter
On the `arenas` index page, Google Maps populates the right hand side of the page. If the user moves the map and the marker goes out of bounds or comes in bounds, the list on the left-hand side will dynamically update the list. 

![hoopsbnb_maps](https://user-images.githubusercontent.com/57606555/79589942-375c2900-80a4-11ea-8656-8e6f991bd681.jpg)


## Notable Future Features
### 1. Search by keyword
Users will be able to search by location.

### 2. Reviews
Users will be able to submit, leave, and edit their own reviews.

### 3. Users profiles
Users will receive their own profile page, where they'll be able to access/manage their profile details. 
