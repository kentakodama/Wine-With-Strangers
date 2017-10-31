
import React from 'react';
import {Link} from 'react-router-dom';

const MainPage = (props) => {
  return (
  <div className="main-page">
    <div className="pitch-section">
      <h1>Tired of Drinking Alone?</h1>
      <div>
        <Link to='/signup' className="signup-button">MEET STRANGERS NOW</Link>
      </div>
    </div>
    <div className="divider">
      <div className="explanation">
        <h2>Have fun</h2>
        <p>You and a few others can meet up at a bar</p>
      </div>
      <div className="explanation">
        <h2>No strings attached</h2>
        <p>See what happens</p>
      </div>
      <div className="explanation">
        <h2>Have real conversations</h2>
        <p>Talk for two hours about anything</p>
      </div>
    </div>
    <div className="pitch-container">
      <p className="catch-phrase">SO WINE NOT JOIN US ?</p>
      <div className="pitch">
        <img src="https://res.cloudinary.com/dql6mlrow/image/upload/v1509436295/Screen_Shot_2017-10-31_at_12.49.13_AM_a4leip.png" />
        <div className="words">
          <p className="summary">We know you're cool</p>
          <p className="paragraph">Everyone's got something unique to contribute. We all have amazing stories and experiences we've lived. Wouldn't you like to share yours and be a part of someone else's? </p>
        </div>
      </div>
      <div className="pitch">
        <div className="words">
          <p className="summary">But why do we drink alone?</p>
          <p className="paragraph">Our path's don't always cross. We all have busy schedules. Sometime's we want to meet new friends, but where? It's easy to be complacent and be alone </p>
        </div>
        <img  src="https://res.cloudinary.com/dql6mlrow/image/upload/v1509436107/Screen_Shot_2017-10-31_at_12.44.18_AM_smbilv.png" />
      </div>
      <div className="pitch">
        <img src="https://res.cloudinary.com/dql6mlrow/image/upload/v1509436107/Screen_Shot_2017-10-31_at_12.43.16_AM_qydtpn.png" />
        <div className="words">
          <p className="summary">It's scary meeting strangers</p>
          <p className="paragraph">Nope. Not at all! Strangers are just friends you haven't met yet. Wasn't it a bit scary getting to know you're classmates or coworkers? Are they scary now? We all feel like that. Don't worry!</p>
        </div>
      </div>
      <div className="pitch">
        <div className="words">
          <p className="summary">So join us!</p>
          <p className="paragraph">Don't drink wine alone, drink wine with strangers! You're future best friends!</p>
        </div>
        <img  src="https://res.cloudinary.com/dql6mlrow/image/upload/v1509436107/Screen_Shot_2017-10-31_at_12.42.52_AM_vbp5ki.png" />
      </div>
    </div>
  </div>
)};

export default MainPage;
