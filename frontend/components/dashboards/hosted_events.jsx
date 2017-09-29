import React from 'react';
import EventIndexItem from '../events/event_index_item';
import DashboardNav from './dashboard_nav';

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
        <DashboardNav />
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
