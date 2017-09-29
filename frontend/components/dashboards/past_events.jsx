import React from 'react';

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
      <div className="events-page">
        <ul>
          {
            events.map(event =>
                <li className="event-item">
                  <div className="info-container">
                    <div>
                      <div className="info-and-pic">
                        <div className="time-container">
                          <Moment className="date" format="MM/DD">
                            {new Date(event.date + " " + event.hour)}
                          </Moment>
                          <div className="meeting-time">
                            <h3>Meet at:</h3>
                            <Moment className="start-time" format="HH:mm">
                              {new Date(event.date + " " + event.hour)}
                            </Moment>
                          </div>
                        </div>
                        <div className="host-info">
                          <div className="host-pic" style={{backgroundImage: `url(${event.host.img_url})`}}></div>
                          <h1>{event.host.name}</h1>
                        </div>
                      </div>
                      <div className="name-and-address">
                        <div className="event-name">
                          <h3>{event.name}</h3>
                        </div>
                        <h2 className="address">{event.address}</h2>
                        <hr className="hr"></hr>
                        <RsvpButtonContainer event={event} />
                      </div>
                    </div>
                  </div>
                </li>
              )
            }
        </ul>
      </div>
    );
  }


}

export default PastEvents;
