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
      <div
        onSubmit={this.props.onSubmit}
        className="needs-validation w-50 p-4"
        novalidate
      >
        <h1 className="text-center">Login</h1>

        {/* Fill out form */}
        <form className={`p-4 ${this.props.displayForm}`}>
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

        {/* Display after submit */}
        <div
          className={`m-3 p-4 h-100 justify-content-center align-items-center bg-light rounded-3 ${this.props.displaySubmit}`}
        >
          <h1>Form submitted</h1>
        </div>
      </div>
    );
  }
}

export default Form;
