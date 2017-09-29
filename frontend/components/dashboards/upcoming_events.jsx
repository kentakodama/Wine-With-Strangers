import React from 'react';
import EventIndexItem from '../events/event_index_item';

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
      <div className="events-page">
        <ul>
          {
            events.map(event =>
              <EventIndexItem key={event.id} event={event}/>)
          }
        </ul>
      </div>
    );
  }

}

export default UpcomingEvents;
