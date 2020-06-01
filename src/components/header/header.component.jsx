import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img
        src="https://img.icons8.com/dusk/64/000000/contact-card.png"
        className="logo"
        alt="contacts"
      />
    </Link>

    <div className="options">
      {currentUser ? (
        <div className="option">
          {" "}
          Hi,{" "}
          {currentUser.displayName[0].toUpperCase() +
            currentUser.displayName.slice(1)}
          !
        </div>
      ) : null}
      {currentUser ? (
        <div className="option option-link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option option-link" to="/auth">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
