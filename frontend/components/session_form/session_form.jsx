import React from 'react';
import {
  withRouter
} from 'react-router-dom';
import merge from 'lodash/merge';
import NavBarContainer from '../nav_bar/nav_bar_container';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoClick = this.demoClick.bind(this);
  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({},this.state);
    this.props.processForm(user);
  }

  demoClick(){
    document.getElementById("email").value = "chris@korsk.com";
    document.getElementById("password").value = "111111";
    const user = merge({},{email: "chris@korsk.com", password: "111111"});
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount(){
    this.props.clearError();
  }

  render () {
    let demo;
    if (this.props.formType === "Log in"){
      demo = (<button className="session-submit" type="button" onClick={this.demoClick}>Demo Login</button>)
    }else{
      demo = (<div></div>)
    }

    return(

      <div className="login-form-container">
        <header>
          <NavBarContainer />
        </header>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>Please {this.props.formType} or {this.props.navLink}</p>
            <br />
            <div className="line-break"></div>
            <br />
            <div className="login-errors">{this.renderErrors()}</div>
            <div className="login-form">
              <br />
              <div className="login-fields">
                <label>Email:</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  id="email"
                  />
                  <br />
                  <label>Password:</label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    id="password"
                    />

              </div>
              <br/>
              <button className="session-submit" type="submit" id="btn-submit">{this.props.formType}</button>
              <br />
                {demo}
            </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
