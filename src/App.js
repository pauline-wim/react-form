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
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(e) {
    this.setState({ emailValue: e.target.value });
  }

  passwordChange(e) {
    this.setState({ passwordValue: e.target.value });
  }

  handleSubmit(e) {
    alert("Form submitted");
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form
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
