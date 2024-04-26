import React from "react";
import userImage from "/userImg.png";


const Card = ({ name, username, email, address }) => {
  return (
    <div className="col col-md-4">
      <div className="card">
        <img src={userImage} className="card-img-top" alt="First Card Image" />
        <div className="card-body">
          <h4 className="card-title name username">
            {name}
            {<br />}
            {username}
          </h4>
          <h4 className="card-text email">{email}</h4>
          <p className="card-text address">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
