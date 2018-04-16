
# Wine with Strangers

Wine with Strangers is a meet up web app that promotes and organizes social events for strangers to meet each other.
It allows users to create custom events in their home city, view other events, and RSVP to them as guests.

## Technologies Used
- Ruby on Rails
- PostgreSQL
- Heroku
- React.js/Redux
- HTML5 and CSS


## Main Technical Features

## View Events by City
![Alt text](readme_pictures/events_in_city.png?raw=true "Events in City")

Authenticated users can browse events happening by location and RSVP to events that update in real time. In order to minimize costly database requests for each event, a single API retrieves all events for a particular city. Once users click on the RSVP button, the Rails backend creates an RSVP object associated with the user, sending back a promise object that initiates the Redux cycle - storing users events in state and re-rendering the component.


Below shows how the Redux cycle is achieved by connecting a smart container with a normal React.js component to access and render state.


Redux Container:

```

import { connect } from 'react-redux';

import LocationsIndex from './locations_index';
import {requestAllLocations} from '../../actions/location_actions';

const mapStateToProps = (state) => ({
  locations: state.locations
});

const mapDispatchToState = (dispatch) => ({
  requestAllLocations: () => dispatch(requestAllLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToState
)(LocationsIndex);


```

Normal React.js Component:
```
class LocationsIndex extends React.Component {

  componentWillMount() {
    this.props.requestAllLocations();
  }

  render () {
    const locations = values(this.props.locations);

    return (
      <div>
        <ul className="locations-index">
          {locations.map(location => <LocationIndexItem key={location.id} location={location}/>)}
        </ul>
      </div>
    );

  }
}

```

### Create and Share Custom Events
![Alt text](readme_pictures/create_event.png?raw=true "Create Event")

Users can create and publish their own events. The form takes user inputs which are validated on several criteria in the Rails backend. Incomplete or invalid attempts to create an event entry in the database alert errors via the Events controller in Rails.

Validations:

 ```
 class Event < ApplicationRecord

   validates :name, :host_id, :address, :date, :hour, :information, presence: true
   validates :occurred, inclusion: { in: [true, false] }

   belongs_to :host,
     primary_key: :id,
     foreign_key: :host_id,
     class_name: :User

   belongs_to :location,
     primary_key: :id,
     foreign_key: :location_id,
     class_name: :Location

   has_many :rsvps,
     primary_key: :id,
     foreign_key: :event_id,
     class_name: :Rsvp

   has_many :guests,
     through: :rsvps,
     source: :attendee

 end

 ```

### Manage Events in Dashboard
![Alt text](readme_pictures/dashboard.png?raw=true "Dashboard")

Users can manage their past, upcoming, and hosted events in a simple, visually-appealing dashboard.

The Redux cycle enables real-time updates to the status of events. For example, a user may click the "skip" button to unjoin an event. This deletes an instance of an RSVP in the Rails backend which changes the app's state and re-renders the React.js component.

Additionally, selectors are used to eliminate redundant code.

Below is an example of how a smart Redux component gives a normal React.js component access to one of those types of events:

hosted_events_container.js

```
import {connect} from 'react-redux';

import HostedEvents from './hosted_events';
import { selectUpcomingUserEvents, selectPastUserEvents, selectHostedEvents } from '../../reducers/selectors';

import { requestUserEvents } from '../../actions/event_actions';

const mapStateToProps = (state) => ({
  hostedEvents: selectHostedEvents(state, state.session.currentUser.id)
});

const mapDispatchToProps = (dispatch) => ({
  requestUserEvents: () => dispatch(requestUserEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(HostedEvents);

```

hosted_events.js

```

class HostedEvents extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.requestUserEvents();
  }


  render() {
    const events = this.props.hostedEvents;

    return (
      <div>
        <div className="dashboard-nav">
          <div className="dashboard-links">
            <Link className="dashboard-link" to="/dashboard/past">Past Events</Link>
            <Link className="dashboard-link" to="/dashboard/upcoming">Upcoming Events</Link>
            <Link className="selected" to="/dashboard/host">Hosted Events</Link>
          </div>
        </div>
        <div className="events-page">
          <ul>
            {
              events.map(event =>
                <EventIndexItem key={event.id} event={event}/>)
            }
          </ul>
        </div>
      </div>
    );
  }

}


```
