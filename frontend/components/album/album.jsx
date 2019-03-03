import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from '../music_player/music_player';
import Footer_auth from '../footer_bar/footer_auth';
import Artist from '../artist/artist_container';

class AlbumDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      artist: "",
      description: ""
    }
  }
  componentDidMount(){
    this.props.fetchAlbum(this.props.id);
    this.props.fetchSongsAlbum(this.props.id);
    if (this.props.albums){
      this.props.fetchUser(this.props.album.artist_id);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchAlbum(this.props.match.params.id);
      this.props.fetchSongsAlbum(this.props.id);
      if (this.props.albums){
        this.props.fetchUser(this.props.album.artist_id);
      }
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
          display = arr.map(song => {
            return <section className="track-render" key={song.id}>
                <li>{song.track_number}. {song.title}</li>
                <ReactAudioPlayer src={song.songUrl} controls />
                {/* <h3>Track Number: {song.track_number}</h3> */}
              </section>;
          });
        }
    let photo = <img />
    // console.log(this.props.user.photoUrl);
    if (this.props.album.photoUrl){
      photo = <img className="profile" src={this.props.album.photoUrl} />
    }


    return(
      <section className="album-details">
        <AuthNavBarContainer />
        <section className="auth-body">
          <ul className="album-props">
            <div className="album-tracks">
              <li>{display}</li>
            </div>
          </ul>
          <ul className="album-props-2">
            {photo}
            <div className="album-text">
              <li>Title: {this.props.album.title}</li>
              <li>By: <Artist id={this.props.album.artist_id} /></li>
              <br></br>
              <li>Description: {this.props.album.description}</li>
            </div>
          </ul>
        </section>
        <Footer_auth />
      </section>
  )}
}

export default AlbumDetails;
