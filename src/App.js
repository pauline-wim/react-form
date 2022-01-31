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
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.setState({ emailValue: e.target.value });
    if (
      this.state.emailValue.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.setState({ validEmail: "is-valid" });
    }
  }

  passwordChange(e) {
    this.setState({ passwordValue: e.target.value });
    if (this.state.passwordValue.length > 5) {
      this.setState({ validPassword: "is-valid" });
    }
  }

  handleSubmit(e) {
    alert("Form submitted");
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form
          validEmail={this.state.validEmail}
          validPassword={this.state.validPassword}
          onSubmit={this.handleSubmit}
          emailValue={this.state.emailValue}
          passwordValue={this.state.passwordValue}
          emailChange={this.emailChange}
          passwordChange={this.passwordChange}
        />
      </div>
    );
  }
}

export default App;
