import React from 'react';
import EventIndexItem from './event_index_item';
import NewEventForm from './new_event_form';
import values from 'lodash/values';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  //locationId comes from Route wildcard
  componentDidMount() {
    this.props.requestLocation(this.props.match.params.locationId);
  }

  render() {
    const events = values(this.props.events);

    if (this.props.city === undefined ) {
      return <div></div>
    }


    return (
      <div className="events-page">
        <div className="city-header" style={{backgroundImage: `url(${this.props.city.img_url })`}}>
          <div className="filter">
            <h1 className="city-name">{ this.props.city.name }</h1>
          </div>
        </div>
        <ul>
          {
            events.map(event =>
              <EventIndexItem key={event.id} event={event}/>)
          }
        </ul>
        <Link className="new-event-link" to={`/locations/${this.props.match.params.locationId}/new`} >
          Create New Event!
        </Link>
      </div>
    );
  }
}

export default EventIndex;

//threading, anti pattern but ok if only one level down with one or two props
// receiveTodo={this.props.receiveTodo} is a key value pair options hash being passed into
//the NewEventForm component as an arg. NewEventForm takes props.
//this and creating a container are the two ways of creating props
