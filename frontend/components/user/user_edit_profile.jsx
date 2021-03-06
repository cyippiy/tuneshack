import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import Footer_auth from "../footer_bar/footer_auth";


class UserEditProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      band_name: "",
      email: "",
      description: "",
      photoUrl: "",
      id: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.fetchUser(this.props.id)
      .then(res => {
        this.setState({
          email: res.user.email,
          id: res.user.id,
          band_name: res.user.band_name,
          photoUrl: res.user.photoUrl
        });
      });
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
    if (this.state.band_name === ""){
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
              <p>{album.title}</p>
              <p>{album.description}</p>
              <br />
            </section>
          )
        })
      )
    }
    let photo = <img />;
    if (this.state.photoUrl){
      photo = <img className="profile" src={this.state.photoUrl} />
    }

    return (

      <section className="user-profile">
        <AuthNavBarContainer />
        <section className="auth-body">
          <section className="user-profile-albums">
            <h3><strong>Albums</strong></h3>
            <br />
            {display}
          </section>
          <section className="user-profile-info">
            <h3>EDIT PROFILE</h3>
            {photo}
            <form id="profile-form" onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")} />
              <label>Name/Artist Name</label>
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
        
        </section>
        {/* <Footer_auth /> */}
      </section>
    );
    }
}

export default withRouter(UserEditProfile);
