import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAlbums();
  }

  render(){
    if(!this.props.albums){
      return null;
    }
    let arr = this.props.albums.albums;
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
              <br />
            </section>
          )
        })
      )
    }

    return(
      <section className="album-index">
        <AuthNavBarContainer />
        <section className="auth-body">
          {display}
        </section>
      </section>
    )
  }

}

export default AlbumIndex;