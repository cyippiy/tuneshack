import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import ReactAudioPlayer from 'react-audio-player';

class AlbumDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
    }
  }
  componentDidMount(){
    this.props.fetchAlbum(this.props.id);
    this.props.fetchSongsAlbum(this.props.id);
  }

  componentDidUpdate(prevProps) {
  if (prevProps.match.params.id !== this.props.match.params.id) {
    this.props.fetchAlbum(this.props.match.params.id);
    this.props.fetchSongsAlbum(this.props.id);
    }
  }

  render(){
    if(!this.props.album){
      return null;
    }

    let arr = this.props.songs;
    let display = (<section>No Songs</section>);
    if (!arr){
      return null;
    }
    else{
      display = (
        arr.map(song => {
          return(
            <section key={song.id}>
              <h3>Title: {song.title}</h3>
              <h3>Track Number: {song.track_number}</h3>
                <ReactAudioPlayer
                  src={song.songUrl}
                  controls
                />
            </section>
          )
        })
    )}
    let photo = <img />
    // console.log(this.props.user.photoUrl);
    if (this.props.album.photoUrl){
      photo = <img className="profile" src={this.props.album.photoUrl} />
    }


    return(
      <section className="album-details">
        <AuthNavBarContainer />
        <section className="song-details">
          <ul>
            <li>{photo}</li>
            <li>Title: {this.props.album.title}</li>
            <li>Description: {this.props.album.description}</li>
            <li>{display}</li>
          </ul>
        </section>
      </section>
  )}
}

export default AlbumDetails;
