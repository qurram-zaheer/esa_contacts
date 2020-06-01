import React from "react";
import "./home.styles.scss";
import firebase from "firebase/app";
import "firebase/firestore";

import AddContact from "../../components/add-contact/add-contact.component";
import ContactCard from "../../components/contact-card/contact-card.component";
import SearchBox from "../../components/search-box/search-box.component";
import { CSVLink } from "react-csv";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNewContact: false,
    };
  }

  toggleFunc = () => {
    this.setState({ toggleNewContact: !this.state.toggleNewContact });
  };

  filterContacts = ({ name, value }) => {
    this.props.searchFilter({ name, value });
  };

  render() {
    if (!this.props.currentUser) {
      return (
        <div className="home-container">
          <h2>Please sign in to view your contacts!</h2>
        </div>
      );
    }
    return (
      <div className="home-container">
        <div className="full-row">
          {" "}
          <SearchBox filterContacts={this.filterContacts} />
        </div>

        <div className="directory">
          <div
            style={{
              display: "flex",
              width: "100%",
              margin: "1rem",
            }}
          >
            {" "}
            <div className="add-contact" onClick={() => this.toggleFunc()}>
              <img
                src="https://img.icons8.com/dusk/32/000000/add-user-group-man-woman.png"
                alt="add"
              />
              <p>ADD CONTACT</p>
            </div>
            {this.state.toggleNewContact ? (
              <AddContact
                currentUser={this.props.currentUser}
                newContactAdded={this.props.newContactAdded}
              />
            ) : null}
            <div className="csv-box" onClick={this.exportToCsv}>
              <img
                src="https://img.icons8.com/dusk/32/000000/export-csv.png"
                alt="export-to-csv"
              />
              <CSVLink data={this.props.contacts}>EXPORT TO CSV</CSVLink>
            </div>
          </div>
          {this.props.contacts.map((contact) => (
            <ContactCard
              contact={contact}
              key={contact.email}
              currentUser={this.props.currentUser}
              contactUpdated={this.props.contactUpdated}
            ></ContactCard>
          ))}
        </div>
      </div>
    );
  }
}
export default HomePage;
