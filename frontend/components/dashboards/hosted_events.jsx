import React from 'react';

class HostedEvents extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.requestUserEvents();
  }


  render() {

    return (<div></div>);
  }


}

export default HostedEvents;
