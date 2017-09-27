import React from 'react';
import {connect} from 'react-redux';
import {createNewEvent} from '../../actions/event_actions';


class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', date: '', hour: '', information: '', address: '',  location_id: this.props.match.params.locationId}; //pull from current url
    console.log(this.state.location_id);
    this.handleName = this.handleName.bind(this);
    this.handleInformation = this.handleInformation.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleHour = this.handleHour.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.currentTarget.value});
  }

  handleInformation(event) {
    this.setState({information: event.currentTarget.value});
  }

  handleAddress(event) {
    this.setState({address: event.currentTarget.value});
  }

  handleDate(event) {
    this.setState({date: event.currentTarget.value});
  }

  handleHour(event) {
    this.setState({hour: event.currentTarget.value});
  }

  handleSubmit(event){
    //the event is the submit button. If we submit, it will post auto, button
    //we dont want that. so we capture the event being passed through and prevent its default post action
    event.preventDefault();
    this.props.createNewEvent( this.state ) //updating here
    .then(response => this.props.history.push(`/locations/${this.props.match.params.locationId}`));

  }

  render() {
    console.log(this.state);
    return(
      <div className="event-form-page">
        <h1>Host Your Own Event</h1>
        <form className="event-form">
          <input type="text" placeholder="Name of event" value={this.state.name} onChange={this.handleName}></input>
          <input type="text" placeholder="Please write a brief description" value={this.state.information} onChange={this.handleInformation}></input>
          <input type="text" placeholder="Address" value={this.state.address} onChange={this.handleAddress}></input>
          <div className="event-time">
          <input className="event-date" type="date" value={this.state.date} onChange={this.handleDate}></input>
            <select defaultValue="Select a time" className="event-hour" onChange={this.handleHour}>
              <option value="Select a time" disabled>Select a time</option>
              <option value="7:00:00">7:00</option>
              <option value="8:00:00">8:00</option>
              <option value="9:00:00">9:00</option>
              <option value="10:00:00">10:00</option>
              <option value="11:00:00">11:00</option>
              <option value="12:00:00">12:00</option>
              <option value="13:00:00">13:00</option>
              <option value="14:00:00">14:00</option>
              <option value="15:00:00">15:00</option>
              <option value="16:00:00">16:00</option>
              <option value="17:00:00">17:00</option>
              <option value="18:00:00">18:00</option>
              <option value="19:00:00">19:00</option>
              <option value="20:00:00">20:00</option>
              <option value="21:00:00">21:00</option>
              <option value="22:00:00">22:00</option>
              <option value="23:00:00">23:00</option>
              <option value="24:00:00">24:00</option>
              <option value="1:00:00">1:00</option>
              <option value="2:00:00">2:00</option>
            </select>
            </div>
          <input className="create-event-button" type="submit" onClick={this.handleSubmit} value="Create Event!"></input>
        </form>
      </div>
    );
  }

}


const mapDispatchToProps = (dispatch) => ({
  createNewEvent: (state) => dispatch(createNewEvent(state))
});


export default connect(null, mapDispatchToProps)(NewEventForm);
