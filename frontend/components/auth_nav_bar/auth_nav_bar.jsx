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
    return (
      <header className="auth-nav-bar">
        <Link to="/" className="auth-header-link">
          TuneShack
        </Link>
        <ul>
          <li><Link to="/profile" className="btn">collection</Link></li>
          <li><Link to="/profile" className="btn">feed</Link></li>
          <li><form className="search-bar" value="">
            <input type="text" placeholder="search bar"></input>
          </form></li>
        </ul>
      </header>
    )
  }
}

export default AuthNavBar;
