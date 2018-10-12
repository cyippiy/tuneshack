import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
  }

  componentDidMount(){
    let id = this.props.id;
    if (id !== null){
      this.props.fetchUser(id);
    }
  }

  render(){
    let display;
    if (this.props.id === null){
      display = (
          <ul>
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
            <ul>
              <li>
                <Link to="/" className="btn">discover</Link>
              </li>
              <li>
                <Link className="btn" onClick={()=>this.props.logout()} to="/login">log out</Link>
              </li>
            </ul>
          )}
      }

    const username = this.props.id !== null ? (
      <ul>
        <li className="nav-greetings">Hello, {this.props.currentUser.email}</li>
        <li><Link to="/" className="btn">feed</Link></li>
        <li><Link to="/" className="btn">collection</Link></li>
      </ul>
    ) : (
      <ul></ul>
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
                <label>This will be where search bar goes</label>
                <input type="text"></input>
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
