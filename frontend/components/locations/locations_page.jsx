import React from 'react';

import LocationsIndexContainer from './locations_index_container';

const otherCities = ["Osaka", "Nairobi", "Khartoum", "Santiago", "Shanghai", "Saigon", "Machu Pichu", "Dubai", "London", "Queenstown", "Perth", "Singapore", "Dublin", "New Delhi", "Canada", "Oslo", "Bogata", "Hebron", "Changsha", "Lamu", "Cairo", "Milano", "Warsaw"]

const LocationsPage = () => (
  <div className="locations-page">
    <div className="locations-intro">
      <h2>Strangers are everywhere</h2>
      <p>Choose your city, meet new friends over some wine!</p>
    </div>
    <LocationsIndexContainer />
    <div className="locations-explanation">
      <h1>We're expanding!</h1>
      <p>If you don't find us, we'll find you!</p>
    </div>
    <div className="new-locations">
      <ul className="new-city-columns">
        {otherCities.map(city => <p className="city">{city}</p>)}
      </ul>
    </div>
  </div>
);

export default LocationsPage
