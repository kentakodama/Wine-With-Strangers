
import React from 'react';
import {Link} from 'react-router-dom';

const MainPage = (props) => {
  console.log(props);
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
        <img src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/realpeople-1d5fb20324228744e992569f082415977c4b3799ef7b14cc5922c2dade18f97c.png" />
        <div className="words">
          <p className="summary">It’s weird.</p>
          <p className="paragraph">Everyone at tea time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
        </div>
      </div>
      <div className="pitch">
        <div className="words">
          <p className="summary">We won't meet otherwise.</p>
          <p className="paragraph">In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity. </p>
        </div>
        <img  src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/nevermeet-55361a98c59cda3fced04c6234e80553c4ed3858c1028008e6fa3642185d57b9.png" />
      </div>
      <div className="pitch">
        <img src="http://dcu7hky3kqbj1.cloudfront.net/assets/landing/highfive-e7a173c8a773070abd084deeac2eb53919a70990425599ed5e7164dc143d45c6.png" />
        <div className="words">
          <p className="summary">Make friends!</p>
          <p className="paragraph">And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures!</p>
        </div>
      </div>
    </div>
  </div>
)};

export default MainPage;
