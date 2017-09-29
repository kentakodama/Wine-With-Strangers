import React from 'react';
import EventIndexItem from '../events/event_index_item';

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

export default HostedEvents;
