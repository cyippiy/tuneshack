import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import {withRouter} from 'react-router';

class UserEditProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.id);
    this.props.fetchAlbumsUser(this.props.id);
  }

  update(field) {
     return e => {
       this.setState({ [field]: e.target.value });
     };
   }

   handleSubmit(e) {
     e.preventDefault();
     this.props.editUser(this.state);
   }

  render(){
    let band_name = " ";
    if (typeof this.props.currentUser === undefined){
      band_name = " ";
    }
    else{
      band_name = this.state.band_name;
    }
    let arr = this.props.albums;
    window.arr = arr;
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
          <h3>EDIT PROFILE</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Email:</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update("email")} />
            <label>Artist/Band Name:</label>
            <input type="text"
              value={band_name}
              onChange={this.update("band_name")} />
            <input type="submit" value="edit information" />
          </form>
          <h3><strong>Albums</strong></h3>
          <br />
          {display}
        </section>
      </section>
    );
    }
}

export default withRouter(UserEditProfile);
