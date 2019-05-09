import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AuthNavBar extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.id);
    // this.props.fetchAlbums();
  }

  randomDiscover(){
    return Math.floor(Math.random() * (3-1)) + 1;
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
            <li>
              <Link to={`/albums/${this.randomDiscover()}`} className="btn">
                discover
              </Link>
            </li>
            <li>
              <Link to="/albums" className="btn">
                feed
              </Link>
            </li>
            <li>
              <form className="search-bar" value="">
                <input type="text" className="search" placeholder="search bar" />
              </form>
            </li>
          </ul>
        </section>

        <section className="auth-nav-right">
          <ul className="auth-nav-ul-right">
            <li>
              <Link to="/profile" className="btn">
                {greeting}
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <FontAwesomeIcon icon="user-cog" onClick={() => this.props.logout()}/>
                </button>
                <ul className="dropdown-content">
                  <li>
                    {/* <Link
                      to="/"
                      className="btn"
                      onClick={() => this.props.logout()}
                    >
                      log out
                    </Link> */}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </header>
    );
  }
}

export default AuthNavBar;
