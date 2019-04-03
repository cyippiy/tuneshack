import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import { Link } from 'react-router-dom';
import Footer_auth from '../footer_bar/footer_auth';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      band_name: "",
      email: "",
      description: ""
    }
  }
  componentDidMount(){
    this.props.fetchUser(this.props.id);
    this.props.fetchAlbumsUser(this.props.id);
    // this.setState({band_name: this.props.user.band_name, email: this.props.user.email,
    // description: this.props.user.description});
  }

  componentDidUpdate(prevProps) {
  if (prevProps.match.params.id !== this.props.match.params.id) {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchAlbumsUser(this.props.id);
  }
}

  render(){
    if(!this.props.user){
      return null;
    }
    let arr = this.props.albums;
    let display = (<section>No albums</section>);
    if (!arr){
      return null;
    }
    else{
      display = (
        arr.map(album => {
          return(
            <section className="album-render" key={album.id}>
              <Link to={`/albums/${album.id}`} className="img">
                <img src={album.photoUrl} />
              </Link>
              <p>{album.title}</p>
              <p>{album.description}</p>
            </section>
          )
        })
    )}

    let artist,description,email = ' ';
    // console.log(this.props.user);
    // console.log(this.props.id);
    if (this.props.user.band_name){
      artist = this.props.user.band_name;
    }
    // console.log(this.props.user.band_name);
    if (this.props.user.description){
      description = this.props.user.description;
    }
    if (this.props.user.email){
      email = this.props.user.email;
    }
    let photo = <img />
    // console.log(this.props.user.photoUrl);
    if (this.props.user.photoUrl){
      photo = <img className="profile" src={this.props.user.photoUrl} />
    }


    return (

      <section className="user-profile">
        <AuthNavBarContainer />
        <section className="auth-body">
          <section className="user-profile-albums">
            <h3><strong>Albums</strong></h3>
            {display}
          </section>
          <br />
          <section className="user-profile-info">
            <h3>PROFILE</h3>
            {photo}
            <h3>Email: {email}</h3>
            <h3>Name/Artist Name: {artist}</h3>
            <h3>Description: {description}</h3>
          </section>
        </section>
        {/* <Footer_auth /> */}
      </section>
    );
  }
}

export default UserProfile;
