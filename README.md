# README
# Wine with Strangers



Wine with Strangers is a meet up oriented web app that promotes and organizes wine-based events for strangers to meet each other.
It allows users to create custom events in their home city and host fellow wine drinkers for parties. Additionally it allows for RSVPs, viewing other user's events.

The project is based on the popular meetup web app, Tea with Strangers.

Wine with Strangers was created by Kenta Kodama.


##Features
- Users can access different levels of information based on their login status
- Users can browse cities and view each city's events
- Users can RSVP and save their attendance preferences in the database and that information will be available in later version to the party organizer.
- Users can Provide a great deal of information for the party for viewing by other users.
- Users can user an organized dashboard to access events of different categories.
- At the moment the user's can access their past event attendance record, view their hosted events, and their upcoming events.
- The upcoming event list can of course be updated to reflect the user's schedule.


## Project Design

There was significant preparation to define the scope and requirements of the two week project.
Most importantly, the project proposal guided the application's design throughout the process.
The proposal included the normalized state, the schema and database structure, along with nested routes for rendering the rough component layering.



## Technology

The project utilized several front and backend technologies to construct. These included Rails and Postgres for the backend and React.js and Redux for the frontend.


##Experiences from Implementing the project

The project was the first full stack project that I had ever conceived of and executed. It was quite difficult at the beginning because there were so many moving parts that had to fit together and each step could involve multiple design decisions about how to approach the problem, be creative in contextualizing how the problem fits into the overall project flow and how best to avoid and fix problems.

The project was divided into several MVP modules. These helped break the project down into manageable components and also allowed us to repeatedly design and implement the full redux cycle and full stack flow. The mvp components included:
- User authentication on the front and backend. We had to consider several route and rendering possibilities at each stage in order to respond to the user's current state. This was by far the most difficult to implement, but most educational experience. It laid the groundwork for the other components.
- User's must be able to view location dependent events. This mvp component required deep thinking about how to render pages and organize front and backend routes. Although the application seems fairly limited compared to more developed sites, the barebones structure required me to think unconventionally about routes. For example, each location show page of a city is also the index of all events for that particular city. This proved challenging when requesting data from the database and bringing it to the frontend. I made a calculated decision to fetch the complete events objects when requesting for location information. Although that would require the program to fetch more data than necessary, it was better than repeatedly being bottlenecked by internet speeds for continual requests. My advisor helped me realize that since this was the most expensive part of the app cycle, it was best to do this as few times as possible while keeping other components lean.

- User's must be able to rsvp to events. This also provided several challenges and opportunities for learning during my first full stack project. I like thinking about how I would fetch, parse, store, and finally retrieve data from the client and server, but also like to hear other people's ideas. I asked my advisor for his thoughts, then asked several of my cohortmates how they would approach the problem. This helped me explain, defend, but also modify my own plan of attack before actual implementation. What surprised me was that there was no consensus even amongst those who had had several years of web development experience. Some people were convinced that I should utilize the joins table directly in the backend to associate my user and events. Others were inclined to nest users inside event objects or vice versa. Where to retrieve the necessary data was also up to debate. Some urged me to use the state's current user, while my advisor convinced me to rely on the backend validations retrieve the current user. The different reasons behind each person's opinion and the realization of multiple paths was a very interesting experience for me. It made me a more critical thinker.

- Lastly, I had to render a dashboard in order to organize user's data in client-side rendering. Although I was partially cloning the features of an existing web app, Tea with Strangers, the dashboard feature was not as developed in the original so I had to rethink how it would look and be utilized by the user. I had to make user experience decisions several times then attempted to code out the implementation. I often had to go back to the drawing board because I did not understand the complexity of design and how thoroughly it's interconnected with even basic data fetching. It was a great learning experience and now I am faster and more agile to come up with a plan then implement it.
