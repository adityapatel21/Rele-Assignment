import React from "react";
import "./Artists.css";

const Artists = ({ artist }) => {
  const backgroundStyle = {
    backgroundImage: `url(${artist.backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="artist-container" style={backgroundStyle}>
      <div className="profile-info">
        <div className="profile-photo">
          <div className="active-dot"></div>
          <img src={artist.profileImg} alt="profile_photo" />
        </div>
        <div className="profile-name-id">
          <h3>{artist.name}</h3>
          <p>{artist.userId}</p>
        </div>
      </div>
    </div>
  );
};

export default Artists;
