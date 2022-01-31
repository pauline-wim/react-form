import React from "react";
// Components
import Form from "./components/Form";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: "",
      passwordValue: "",
      validEmail: "is-invalid",
      validPassword: "is-invalid",
      displayForm: "d-block",
      displaySubmit: "d-none",
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.setState({ emailValue: e.target.value });
    if (
      this.state.emailValue.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
      )
    ) {
      this.setState({ validEmail: "is-valid" });
    }
  }

  passwordChange(e) {
    this.setState({ passwordValue: e.target.value });
    if (
      this.state.passwordValue.match(
        // Minimum six characters (letters), max 2O and at least one number:
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/
      )
    ) {
      this.setState({ validPassword: "is-valid" });
    }
  }

  handleSubmit(e) {
    // alert("Form submitted");
    e.preventDefault();
    {
      this.setState({ displayForm: "d-none" });
      this.setState({ displaySubmit: "d-flex" });
    }
  }

  render() {
    return (
      <section className="m-4 p-4 d-flex justify-content-center">
        <Form
          onSubmit={this.handleSubmit}
          validEmail={this.state.validEmail}
          validPassword={this.state.validPassword}
          emailValue={this.state.emailValue}
          passwordValue={this.state.passwordValue}
          emailChange={this.emailChange}
          passwordChange={this.passwordChange}
          displayForm={this.state.displayForm}
          displaySubmit={this.state.displaySubmit}
        />
      </section>
    );
  }
}

export default App;
