import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';

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
    let display = (<section>No albums(</section>);
    if (!arr){
      return null;
    }
    else{
      display = (
        arr.map(album => {
          return(
            <section key={album.id}>
              <h3>Title: {album.title}</h3>
              <h3>Description: {album.description}</h3>
            </section>
          )
        })
    )}

    let artist,description,email = ' ';
    console.log(this.props.user);
    console.log(this.props.id);
    if (this.props.user.band_name){
      artist = this.props.user.band_name;
    }
    console.log(this.props.user.band_name);
    if (this.props.user.description){
      description = this.props.user.description;
    }
    if (this.props.user.email){
      email = this.props.user.email;
    }

    return (

      <section className="user-profile">
        <AuthNavBarContainer />
        <section className="user-profile-body">
          <h3>THIS IS MY PROFILE BODY</h3>
          <h3>Email: {email}</h3>
          <h3>Name/Artist Name: {artist}</h3>
          <h3>Description: {description}</h3>
          <h3><strong>Albums</strong></h3>
          <br />
          {display}
        </section>
      </section>
    );
  }
}

export default UserProfile;
