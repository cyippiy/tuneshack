import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';

class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.id);
  }

  render(){

    let band_name;
    if (band_name === null){
      band_name = " ";
    }
    else{
      band_name = this.props.currentUser.band_name;
    }


    return (
      <section className="user-profile">
        <AuthNavBarContainer />
        <section className="user-profile-body">
          <h3>THIS IS MY PROFILE BODY</h3>
          <h3>Email: {this.props.currentUser.email}</h3>
          <h3>Band: {band_name}</h3>
        </section>
      </section>
    );
  }
}

export default UserProfile;
