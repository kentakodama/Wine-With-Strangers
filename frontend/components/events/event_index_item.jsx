import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import RsvpButtonContainer from '../rsvps/rsvp_button_container';

//{this.props.event.time}

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const time = new Date(this.props.event.date + " " + this.props.event.hour);

    return (
      <li className="event-item">
        <div className="info-container">
          <div>
            <div className="info-and-pic">
              <div className="time-container">
                <Moment className="date" format="MM/DD">
                  {time}
                </Moment>
                <div className="meeting-time">
                  <h3>Meet at:</h3>
                  <Moment className="start-time" format="HH:mm">
                    {time}
                  </Moment>
                </div>
              </div>
              <div className="host-info">
                <div className="host-pic" style={{backgroundImage: `url(${this.props.event.host.img_url})`}}></div>
                <h1>{this.props.event.host.name}</h1>
              </div>
            </div>
            <div className="name-and-address">
              <div className="event-name">
                <h3>{this.props.event.name}</h3>
              </div>
              <hr className="hr"></hr>
              <h2 className="address">{this.props.event.address}</h2>
              <RsvpButtonContainer event={this.props.event} />
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default EventIndexItem;

// <Link className="info-container" to={`/locations/${this.props.event.location_id}/${this.props.event.location_id}`} >
