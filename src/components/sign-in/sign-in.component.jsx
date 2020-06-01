import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>

          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
        </form>
        <div className="button-group">
          {" "}
          <Button onClick={this.handleSubmit}>Sign In</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
