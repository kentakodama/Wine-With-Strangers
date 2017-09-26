import React from 'react';
import {Link} from 'react-router-dom';


class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/locations/${this.props.event.location_id}/${this.props.event.location_id}`} >
          <div className="host-info">
            <div className="host-pic"  style={{backgroundImage: `url(${this.props.event.host.img_url})`}}></div>
            <h1>{this.props.event.host.name}</h1>
          </div>
          <div className="event-thumb">
            <h1 className="name">{this.props.event.name}</h1>
            <h1 className="address">{this.props.event.address}</h1>
            <h1 className="time">{this.props.event.time}</h1>
          </div>
        </Link>
      </li>
    );
  }

}

export default EventIndexItem;
