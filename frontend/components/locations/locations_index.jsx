import React, {Component} from 'react';
import values from 'lodash/values';
//notes: the key id int necessary but it makes look up faster
//values turns object into array

import LocationIndexItem from './location_index_item';

class LocationsIndex extends React.Component {

  componentWillMount() {
    this.props.requestAllLocations();
  }

  render () {
    const locations = values(this.props.locations);

    return (
      <div>
        <ul className="locations-index">
          {locations.map(location => <LocationIndexItem key={location.id} location={location}/>)}
        </ul>
      </div>
    );

  }
}

export default LocationsIndex;
