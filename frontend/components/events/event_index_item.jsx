import React from 'react';


class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div>
          {this.props.event.name}
        </div>
      </li>
    );
  }

}

export default EventIndexItem;
