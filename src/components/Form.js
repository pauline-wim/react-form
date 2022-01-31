import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form
        onSubmit={this.props.onSubmit}
        className="needs-validation"
        novalidate
      >
        <h1>Login</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            className={`form-control ${this.props.validEmail}`}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email..."
            value={this.props.emailValue}
            onChange={this.props.emailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className={`form-control ${this.props.validPassword}`}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password..."
            value={this.props.passwordValue}
            onChange={this.props.passwordChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
          />
          <label className="form-check-label" for="rememberMe">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
