import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import AlbumContainer from '../album/album_container';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.id);
    this.props.fetchAlbumsUser(this.props.id);
  }

  render(){

    let band_name;
    if (band_name === null){
      band_name = " ";
    }
    else{
      band_name = this.props.currentUser.band_name;
    }
    let arr = this.props.albums;
    window.arr = arr;
    // debugger
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
      )

    }

    return (

      <section className="user-profile">
        <AuthNavBarContainer />
        <section className="user-profile-body">
          <h3>THIS IS MY PROFILE BODY</h3>
          <h3>Email: {this.props.currentUser.email}</h3>
          <h3>Artist/Band Name: {band_name}</h3>
          <h3><strong>Albums</strong></h3>
          {display}
        </section>
      </section>
    );
  }
}

export default UserProfile;
