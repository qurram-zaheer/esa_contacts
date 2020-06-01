import React from "react";
import "./button.styles.scss";

const Button = ({ children, isGoogleSignIn, ...rest }) => (
  <div
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...rest}
  >
    {children}
  </div>
);

export default Button;
