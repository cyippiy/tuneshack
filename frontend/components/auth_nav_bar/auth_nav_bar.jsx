import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../search_bar/search_bar_container';

class AuthNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      band_name: "",
      id: ""
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.id)
      .then(res => {
        this.setState({
          email: res.user.email,
          id: res.user.id,
          band_name: res.user.band_name
        });
      });
    // this.props.fetchAlbums();
  }

  randomDiscover(){
    return Math.floor(Math.random() * (3-1)) + 1;
  }
  handleLogout(){
    this.setState({ email: "", band_name: "", id: "" });
    this.props.logout();
  }


  render(){
    let greeting = " ";
    if (this.state.id !== ""){
      if (this.state.band_name !== ""){
        greeting = this.state.band_name;
      }
      else{
        greeting = this.state.email;
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
              <SearchBar />
              {/* <form className="search-bar" value="">
                <input type="text" className="search" placeholder="search bar" />
              </form> */}
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
                  <FontAwesomeIcon icon="user-cog" onClick={() => this.handleLogout()}/>
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
