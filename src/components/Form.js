import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends React.Component {
  render() {
    return (
      <form action="" onSubmit={this.props.onSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email..."
            value={this.props.emailValue}
            onChange={this.props.emailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password..."
            value={this.props.passwordValue}
            onChange={this.props.passwordChange}
            required
          />
        </div>
        <div>
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label for="rememberMe">Remember me</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
