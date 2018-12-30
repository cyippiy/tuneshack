import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from '../music_player/music_player'
import Footer_auth from '../footer_bar/footer_auth'

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
    // this.props.fetchUser(this.props.artist);
  }

  componentDidUpdate(prevProps) {
  if (prevProps.match.params.id !== this.props.match.params.id) {
    this.props.fetchAlbum(this.props.match.params.id);
    this.props.fetchSongsAlbum(this.props.id);
    // this.props.fetchUser(this.props.artist)
    }
  }

  render(){
    if(!this.props.album){
      return null;
    }
    else if (!this.props.artist){
      return null;
    }

    let arr = this.props.songs;
    let display = (<section>No Songs</section>);
    if (!arr){
      return null;
    }
    else{
          // this.setState({band_name: this.props.user.band_name, email: this.props.user.email,
      // this.setState({ title: this.props.album.title})
        // this.artist: this.props.album.artist_id, description: this.props.album.description })
          display = arr.map(song => {
            return <section className="track-render" key={song.id}>
                <h3>Title: {song.title}</h3>
                <h3>Track Number: {song.track_number}</h3>
                <ReactAudioPlayer src={song.songUrl} controls />
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
            <div className="album-text">
              <li>{photo}</li>
              <li>Title: {this.props.album.title}</li>
              <li>Aritst: {this.props.album.artist_id}</li>
              <li>Description: {this.props.album.description}</li>
            </div>
            <div className="album-tracks">
              <li>{display}</li>
            </div>
          </ul>
        </section>
        <Footer_auth />
      </section>
  )}
}

export default AlbumDetails;
