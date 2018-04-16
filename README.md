# README
# Wine with Strangers



Wine with Strangers is a meet up web app that promotes and organizes social events for strangers to meet each other.
It allows users to create custom events in their home city, view other events, and RSVP to them as guests.

## Technologies Used
- Ruby on Rails
- PostgreSQL
- Heroku
- React.js/Redux
- HTML5 and CSS

## Features
- Users can access different levels of information based on their login status
- Users can browse cities and view each city's events
- Users can RSVP and save their attendance preferences in the database and that information will be available in later version to the party organizer.
- Users can Provide a great deal of information for the party for viewing by other users.
- Users can user an organized dashboard to access events of different categories.
- At the moment the user's can access their past event attendance record, view their hosted events, and their upcoming events.
- The upcoming event list can of course be updated to reflect the user's schedule.


## Project Design

There was significant preparation to define the scope and requirements of the two week project. Much of the work involved defining:
- The normalized Redux state of the app
- The Rails schema and database structure
- Logical and efficient RESTful APIs


## Main Technical Challenges and Features


### User Authentication and Session Management:


![Alt text](readme_pictures/dashboard.png?raw=true "Dashboard")
![Alt text](readme_pictures/cities.png?raw=true "Cities")
![Alt text](readme_pictures/create_event.png?raw=true "Create Event")
![Alt text](readme_pictures/home_screen.png?raw=true "Home")
![Alt text](readme_pictures/signup.png?raw=true "Signup")
![Alt text](readme_pictures/events_in_city.png?raw=true "Events in City")




The project was divided into several MVP modules.

These helped break the project down into manageable components and also allowed us to repeatedly design and implement the

full redux cycle and full stack flow. The mvp components included:

- User authentication on the front and backend. We had to consider several route and rendering possibilities at each stage in order to respond to the user's current state. This was by far the most difficult to implement, but most educational experience. It laid the groundwork for the other components.


## Loading Location-base events to Redux State:

 For example, each location show page of a city is also the index of all events for that particular city. This proved challenging when requesting data from the database and bringing it to the frontend. I made a calculated decision to fetch the complete events objects when requesting for location information. Although that would require the program to fetch more data than necessary, it was better than repeatedly being bottlenecked by internet speeds for continual requests. Since this was the most expensive part of the app cycle, it was best to do this as few times as possible while keeping other components lean.




- Users must be able to rsvp to events.



 I like thinking about how I would fetch, parse, store, and finally retrieve data from the client and server, but also like to hear other people's ideas. I asked my advisor for his thoughts, then asked several of my cohortmates how they would approach the problem. This helped me explain, defend, but also modify my own plan of attack before actual implementation. What surprised me was that there was no consensus even amongst those who had had several years of web development experience. Some people were convinced that I should utilize the joins table directly in the backend to associate my user and events. Others were inclined to nest users inside event objects or vice versa. Where to retrieve the necessary data was also up to debate. Some urged me to use the state's current user, while my advisor convinced me to rely on the backend validations retrieve the current user. The different reasons behind each person's opinion and the realization of multiple paths was a very interesting experience for me. It made me a more critical thinker.


dashboard navigation rethink ux experience

- Lastly, I had to render a dashboard in order to organize user's data in client-side rendering. Although I was partially cloning the features of an existing web app, Tea with Strangers, the dashboard feature was not as developed in the original so I had to rethink how it would look and be utilized by the user. I had to make user experience decisions several times then attempted to code out the implementation. I often had to go back to the drawing board because I did not understand the complexity of design and how thoroughly it's interconnected with even basic data fetching. It was a great learning experience and now I am faster and more agile to come up with a plan then implement it.
