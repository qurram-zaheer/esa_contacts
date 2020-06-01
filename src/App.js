import React from "react";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Switch, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

import HomePage from "./pages/home/home";
import AuthPage from "./pages/auth/auth";
import Header from "./components/header/header.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      contacts: [],
      unfilteredContacts: [],
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(async (snapShot) => {
          let temp = [];
          const db = firebase.firestore();
          const userRef = await db
            .doc(`users/${snapShot.id}`)
            .collection("contacts")
            .get();
          await userRef.docs.map((doc) => temp.push(doc.data()));
          this.setState({
            currentUser: {
              id: snapShot.id,

              ...snapShot.data(),
            },
            contacts: temp,
            unfilteredContacts: temp,
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  newContactAdded = async () => {
    let temp = [];
    const db = firebase.firestore();
    const userRef = await db
      .doc(`users/${this.state.currentUser.id}`)
      .collection("contacts")
      .get();
    await userRef.docs.map((doc) => temp.push(doc.data()));
    this.setState({ contacts: temp, unfilteredContacts: temp });
  };

  contactUpdated = async () => {
    let temp = [];
    const db = firebase.firestore();
    const userRef = await db
      .doc(`users/${this.state.currentUser.id}`)
      .collection("contacts")
      .get();
    await userRef.docs.map((doc) => temp.push(doc.data()));
    this.setState({ contacts: temp, unfilteredContacts: temp });
  };

  searchFilter = ({ name, value }) => {
    let temp = this.state.unfilteredContacts.filter((entry) =>
      entry[name].toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ contacts: temp });
  };

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route
            path="/"
            exact={true}
            render={(props) => (
              <HomePage
                {...props}
                currentUser={this.state.currentUser}
                contacts={this.state.contacts}
                newContactAdded={this.newContactAdded}
                contactUpdated={this.contactUpdated}
                searchFilter={this.searchFilter}
              />
            )}
          />
          <Route path="/auth" exact={true} component={AuthPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
