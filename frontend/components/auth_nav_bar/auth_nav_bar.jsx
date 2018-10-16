import React from 'react';
import { Link } from 'react-router-dom';

class AuthNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
  }

  componentDidMount(){
    this.props.fetchUser(this.props.id);
  }

  render(){
    let greeting = " ";
    if (this.props.id !== null){
      if (this.props.currentUser.band_name !== null){
        greeting = this.props.currentUser.band_name;
      }
      else{
        greeting = this.props.currentUser.email;
      }
    }

    return (
      <header className="auth-nav-bar">
        <section className="auth-nav-left">
          <Link to="/" className="auth-header-link">
            TuneShack
          </Link>
          <ul>
            <li><Link to="/profile" className="btn">discover</Link></li>
            <li><Link to="/profile" className="btn">feed</Link></li>
            <li><form className="search-bar" value="">
              <input type="text" placeholder="search bar"></input>
            </form></li>
          </ul>
        </section>

        <section className="auth-nav-right">
          <ul className="auth-nav-ul-right">
            <li>
              <Link to="/profile" className="btn">{greeting}</Link>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">Gear</button>
                <div className="dropdown-content">
                  <Link to="/" className="btn" onClick={()=>this.props.logout()}>log out</Link>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </header>
    )
  }
}

export default AuthNavBar;
