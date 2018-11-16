import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import AlbumCreate from '../album/album_create_container'

class UserEditProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
     debugger
     this.props.editUser(this.state);
   }

   updateFile(e){
     this.setState({photo: e.currentTarget.files[0]})
   }

   handleFile(e) {
     e.preventDefault();
     const formData = new FormData();
     formData.append('user[photo]');
     $.ajax({
       method: "PATCH",
       url: `api/users/${this.props.id}`,
       data: formData,
       contentType: false,
       processData: false
     });
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
    let display = (<section>No albums(</section>);
    if (!arr){
      return null;
    }
    else{
      display = (
        arr.map(album => {
          return(
            <section key={album.id}>
              <Link to={`/albums/${album.id}`} className="img">
                <img src={album.photoUrl} />
              </Link>
              <p>Title: {album.title}</p>
              <p>Description: {album.description}</p>
            </section>
          )
        })
      )
    }
    let photo = <img />;
    if (this.props.currentUser.photoUrl){
      photo = <img className="profile" src={this.props.currentUser.photoUrl} />
    }

    return (

      <section className="user-profile">
        <AuthNavBarContainer />
        <section className="auth-body">
          <section className="user-profile-info">
            <h3>EDIT PROFILE</h3>
            {photo}
            <form id="profile-form" onSubmit={this.handleSubmit}>
              <input type="file" onChange={this.updateFile} />
              <label>Email:</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")} />
              <label>Name/Artist Name:</label>
              <input type="text"
                value={band_name}
                onChange={this.update("band_name")} />
              <label>Description</label>
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")} />
              <br />
              <input id="btn" type="submit" value="edit information" />
            </form>
          </section>
          <section className="user-profile-albums">
            <h3><strong>Albums</strong></h3>
            <br />
              <AlbumCreate />
            <br />
            {display}
          </section>
        </section>
      </section>
    );
    }
}

export default withRouter(UserEditProfile);
