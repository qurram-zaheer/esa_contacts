import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import "./add-contact.styles.scss";
import firebase from "firebase/app";
import "firebase/firestore";
import { ReactComponent as Tick } from "../../assets/tick.svg";

const AddContact = ({ currentUser, newContactAdded }) => {
  const [contact, setContact] = useState({
    name: "",
    number: "",
    email: "",
    location: "",
    gender: "",
  });

  const [success, setSuccess] = useState(false);
  const { name, number, email, location, gender } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  };

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const addContact = async () => {
    if (!name || !number || !email || !location || !location || !gender) {
      return alert("All fields are required");
    }
    if (number.length < 10 || !/^\d+$/.test(number)) {
      return alert(
        "Phone number needs to be atleast 10 digits and a valid number"
      );
    }

    if (!validateEmail(email)) {
      return alert("Please enter a valid email address");
    }

    const db = firebase.firestore();
    db.collection("users")
      .doc(`${currentUser.id}`)
      .collection("contacts")
      .doc(`${contact.email}`)
      .set({
        name,
        email,
        location,
        number,
        gender,
      })
      .then((res) => {
        setContact({
          name: "",
          number: "",
          email: "",
          location: "",
          gender: "",
        });
        newContactAdded();
        setSuccess(true);
      });
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 1000);
    }
    return;
  }, [success]);

  return (
    <div
      className="add-contact-card"
      style={{
        backgroundColor: `${success ? "#72caaf" : ""}`,
        border: `${success ? "2px solid white" : ""}`,
      }}
    >
      {success ? (
        <div className="success-card">
          <div className="svg-cont">
            <Tick />
          </div>
          <div className="svg-cont">
            <p>Added contact successfully</p>
          </div>
        </div>
      ) : (
        <div>
          <h3>Add contact</h3>
          <div className="form">
            <form>
              <FormInput
                type="text"
                name="name"
                label="Name"
                value={name}
                onChange={handleChange}
              />
              <div className="gender-select">
                <span>Gender:</span>
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    onChange={handleChange}
                  ></input>
                  <label>M</label>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    onChange={handleChange}
                  ></input>
                  <label>F</label>
                </div>
              </div>

              <FormInput
                type="text"
                name="number"
                label="Contact no."
                value={number}
                onChange={handleChange}
              />
              <FormInput
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={handleChange}
              />
              <FormInput
                type="text"
                name="location"
                label="City"
                value={location}
                onChange={handleChange}
              />
            </form>
          </div>
          <div
            className="add-contact"
            onClick={addContact}
            style={{ margin: "auto" }}
          >
            <p>ADD CONTACT</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContact;
