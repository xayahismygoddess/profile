// ProfileCard.js
import React from 'react';
import './style.css';
import favicon from './images/favicon-32x32.png';
import avatar from './images/avatar.png';

const ProfileCard = ({ onChangeView }) => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
        <title>Profile Card</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" />
      </head>
      <body>
        <div className="blur-overlay"></div>
        <main>
          <div className="container">
            <div className="card">
              <section className="img">
                <div className="pattern"></div>
                <img className="avatar" src={avatar} alt="Avatar" />
              </section>
              <section className="userinfo">
                <h1>Nate Higgers</h1>
                <button onClick={onChangeView}>Go to Settings</button> {/* Change to button */}
              </section>
              <section className="userstat">
                <div>
                  <h1>803K</h1>
                  <p>Points</p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default ProfileCard;
