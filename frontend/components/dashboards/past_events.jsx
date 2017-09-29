import React from 'react';
import EventIndexItem from '../events/event_index_item';
import DashboardNav from './dashboard_nav';
import {Link} from 'react-router-dom';

class PastEvents extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.requestUserEvents();
  }

  render() {
    const events = this.props.pastEvents;

    return (
      <div>
        <div className="dashboard-nav">
          <div className="dashboard-links">
            <Link className="selected" to="/dashboard/past">Past Events</Link>
            <Link className="dashboard-link" to="/dashboard/upcoming">Upcoming Events</Link>
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

export default PastEvents;
