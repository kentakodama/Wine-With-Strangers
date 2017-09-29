import React from 'react';
import EventIndexItem from '../events/event_index_item';
import DashboardNav from './dashboard_nav';
import {Link} from 'react-router-dom';

class HostedEvents extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
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
            <Link className="dashboard-link" to="/dashboard">Upcoming Events</Link>
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

export default HostedEvents;
