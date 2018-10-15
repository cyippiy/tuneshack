import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import HomeContainer from '../home.jsx'


class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let id = this.props.id;
    if (id !== null){
      this.props.fetchUser(id);
    }
  }

  render(){
    let display;
    let greeting;
    if (this.props.id !== null){
      if (this.props.currentUser.band_name !== null){
        greeting = this.props.currentUser.band_name;
      }
      else{
        greeting = this.props.currentUser.email;
      }
    }
    if (this.props.id === null){
      display = (
          <ul className="nav-ul-right">
            <li>
              <Link className="btn" to="/signup">sign up</Link>
            </li>
            <li>
              <Link className="btn" to="/login">log in</Link>
            </li>
          </ul>
      )}
      else{
        if (!this.props.currentUser){
          display = (<ul></ul>);
        }
        else{
          display = (
            <ul className="nav-ul-right">
              <li>
                <Link to="/" className="btn">discover</Link>
              </li>
              <li>
                <Link to="/" className="btn" onClick={()=>this.props.logout()}>log out</Link>
              </li>
            </ul>
          )}
      }
    const username = this.props.id !== null ? (
      <ul className="nav-ul-left">
        <li className="nav-greetings">Hello, {greeting}</li>
        <li><Link to="/profile" className="btn">feed</Link></li>
        <li><Link to="/profile" className="btn">collection</Link></li>
      </ul>
    ) : (
      <ul className="nav-ul-left"></ul>
    )

    return (
        <section className="nav-bar">

          <section className="nav-left">
            <section className="nav-left-icon">
              <Link to="/" className="header-link">
                TuneShack
              </Link>
            </section>

            <section className="nav-left-links">
              {username}
            </section>
          </section>


          <section className="nav-right">
            <section className="nav-right-search">
              <form className="search-bar" value="">
                <input type="text" placeholder="search bar"></input>
              </form>
            </section>

            <section className="nav-right-links">
                {display}
            </section>
          </section>
        </section>
    );
  }
}

export default NavBar;
