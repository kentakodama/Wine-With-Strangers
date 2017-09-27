import React from 'react';
import {connect} from 'react-redux';
import {createNewEvent} from '../../actions/event_actions';


class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', time: '', information: ''};
    this.handleName = this.handleName.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.currentTarget.value});
  }

  handleTime(event) {
    this.setState({time: event.currentTarget.value});
  }
  handleInformation(event) {
    this.setState({information: event.currentTarget.value});
  }

  handleSubmit(event){
    //the event is the submit button. If we submit, it will post auto, button
    //we dont want that. so we capture the event being passed through and prevent its default post action
    event.preventDefault();
    this.props.createNewEvent( this.state ); //updating here
    this.setState({ name: '', time: '', information: '' });
  }

  render() {
    return(
      <div className="event-form-page">
        <form className="event-form">
          <input type="text" placeholder="Name of event" value={this.state.name} onChange={this.handleName}></input>
          <input type="text" placeholder="Please provide information" value={this.state.information} onChange={this.handleInformation}></input>
          <input type="text" placeholder="Please provide an address" value={this.state.address} onChange={this.handleAddress}></input>
          <input type="date" value={this.state.time} onChange={this.handleTime}></input>
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
