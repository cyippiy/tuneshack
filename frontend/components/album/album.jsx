import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';

class AlbumDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
    }
  }
  componentDidMount(){
    if (this.props.id)
    this.props.fetchAlbum(this.props.id);
  }

  render(){
    return(
      <section className="album-details">
        <ul>
          <li>Title: {this.props.title}</li>
          <li>Description: {this.props.description}</li>
        </ul>
      </section>
    )
  }
}

export default AlbumDetails;
