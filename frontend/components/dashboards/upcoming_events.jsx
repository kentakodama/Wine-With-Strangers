import React from 'react';
import EventIndexItem from '../events/event_index_item';
import DashboardNav from './dashboard_nav';
import {Link} from 'react-router-dom';
class UpcomingEvents extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.requestUserEvents();
  }

  render() {
    const events = this.props.upcomingEvents;

    return (
      <div>
        <div className="dashboard-nav">
          <div className="dashboard-links">
            <Link className="dashboard-link" to="/dashboard/past">Past Events</Link>
            <Link className="selected" to="/dashboard/upcoming">Upcoming Events</Link>
            <Link className="dashboard-link" to="/dashboard/host">Hosted Events</Link>
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

export default UpcomingEvents;
