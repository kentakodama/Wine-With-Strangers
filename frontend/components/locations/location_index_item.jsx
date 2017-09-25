import React from 'react';
import {Link} from 'react-router-dom';

//must deconstruct location below because location refers to the props passed in the location attribute
const LocationIndexItem = ({location}) => (

  <li>
    <Link to={`/locations/${location.id}`} >
      <div className="city-link"  style={{backgroundImage: `url(${location.img_url})`}}>
        <h2>{location.name}</h2>
      </div>
    </Link>
  </li>

);

export default LocationIndexItem;

//above back ticks allow for string interpolation inside string
//shit is tricky above please review
