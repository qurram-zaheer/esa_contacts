import React, { useState } from "react";
import "./contact-card.styles.scss";
import firebase from "firebase/app";
import "firebase/firestore";

const ContactCard = ({ contact, currentUser, contactUpdated }) => {
  const [editedContact, editContact] = useState(contact);
  const [editStatus, toggleEdit] = useState(false);
  const { name, email, location, number, gender } = contact;
  const db = firebase.firestore();
  const handleChange = (event) => {
    const { name, value } = event.target;

    editContact({
      ...contact,
      [name]: value,
    });
  };

  const supeToggle = async () => {
    if (!editStatus) {
      return toggleEdit(true);
    }

    await db
      .collection(`users/${currentUser.id}/contacts`)
      .doc(`${email}`)
      .update({ ...editedContact });
    contactUpdated();
    return toggleEdit(false);
  };

  const deleteContact = async () => {
    await db
      .collection(`users/${currentUser.id}/contacts`)
      .doc(`${email}`)
      .delete();
    contactUpdated();
  };

  return (
    <div className="contact-card">
      <div className="icon-row">
        <div
          className="data-row"
          onClick={supeToggle}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {!editStatus ? (
            <img
              src="https://img.icons8.com/dusk/24/000000/edit.png"
              alt="edit-ico"
            />
          ) : (
            <img
              src="https://img.icons8.com/dusk/24/000000/save.png"
              alt="save-ico"
            />
          )}
        </div>
        <div
          className="data-row"
          onClick={deleteContact}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <img
            src="https://img.icons8.com/dusk/24/000000/delete-forever.png"
            alt="delete-ico"
          />
        </div>
      </div>
      <div className="contact-logo">
        {editedContact.gender === "M" ? (
          <img
            src="https://img.icons8.com/dusk/64/000000/user.png"
            alt="male-ico"
          />
        ) : (
          <img
            src="https://img.icons8.com/dusk/64/000000/user-female.png"
            alt="female-ico"
          />
        )}
      </div>
      <div className="data">
        <div className="data-row">
          <span>Name: </span>
          {editStatus ? (
            <input
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
            ></input>
          ) : (
            <span style={{ marginLeft: "0.5rem" }}>{name}</span>
          )}
        </div>
        <div className="data-row" style={{ display: "flex" }}>
          <span>Gender: </span>
          {editStatus ? (
            <div style={{ display: "flex" }}>
              <div className="gender">
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  onChange={handleChange}
                  checked={editedContact.gender === "M"}
                ></input>
                <label>M</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  onChange={handleChange}
                  checked={editedContact.gender === "F"}
                ></input>
                <label>F</label>
              </div>
            </div>
          ) : (
            <span style={{ marginLeft: "0.5rem" }}>{gender}</span>
          )}
        </div>
        <div className="data-row">
          <span>Phone no.: </span>
          {editStatus ? (
            <input
              type="text"
              name="number"
              value={editedContact.number}
              onChange={handleChange}
            ></input>
          ) : (
            <span>{number}</span>
          )}
        </div>
        <div className="data-row">
          <span>Email: </span>
          <span style={{ marginLeft: "0.5rem" }}>{email}</span>
        </div>
        <div className="data-row">
          <span>City: </span>
          {editStatus ? (
            <input
              type="text"
              name="location"
              value={editedContact.location}
              onChange={handleChange}
            ></input>
          ) : (
            <span style={{ marginLeft: "0.5rem" }}>{location}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
