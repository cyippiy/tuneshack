import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import ReactAudioPlayer from 'react-audio-player';
import MusicPlayer from '../music_player/music_player';
import Footer_auth from '../footer_bar/footer_auth';
import Artist from '../artist/artist_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class AlbumDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      artistID: "",
      description: "",
      photoUrl: "",
      songs:[],
      artistName: ""
    }
  }
  componentDidMount(){
    // let temp = {};
    this.props.fetchAlbum(this.props.id)
      // .then(res => {
      //   temp.title=res.album.title,
      //   temp.artistID=res.album.artist_id,
      //   temp.description=res.album.description,
      //   temp.photoUrl=res.album.photoUrl
      // });

      .then(res=>{
        this.setState({
          title: res.album.title,
          artistID: res.album.artist_id,
          description: res.album.description,
          photoUrl: res.album.photoUrl
        })
      })
      .then(() => this.props.fetchSongsAlbum(this.props.id))
      .then(res => this.setState({
        songs: res.songs
      })).then(() => this.props.fetchUser(this.state.artistID))
        .then(res => this.setState({
          artistName: res.user.band_name
        }));
    // this.props.fetchSongsAlbum(this.props.id)
    //   .then(res=>this.setState({
    //     songs: res.songs
    //   }));
    // this.setState({
      // songs: this.props.songs,
      // title: temp.title,
      // artistID: temp.artist_id,
      // description: temp.description,
      // photoUrl: temp.photoUrl
    // });
    // this.props.fetchUser(this.state.artistID)
    //   .then(res=> this.setState({
    //     artistName: res.user.band_name
    //   }));
    // if (this.props.album){
    //   this.props.fetchUser(this.props.album.artist_id)
    //     .then(res => this.setState({
    //       artistID: res.user.id
    //     }));
    // }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      // let temp = {};
      this.props.fetchAlbum(this.props.match.params.id)
        // .then(res => {
        //   temp.title = res.album.title,
        //     temp.artistID = res.album.artist_id,
        //     temp.description = res.album.description,
        //     temp.photoUrl = res.album.photoUrl
        // });
        .then(res => this.setState({
          title: res.album.title,
          artistID: res.album.artist_id,
          description: res.album.description,
          photoUrl: res.album.photoUrl
        }))
        .then(() => this.props.fetchSongsAlbum(this.props.match.params.id))
        .then(res => this.setState({
          songs: res.songs
        })).then(() => this.props.fetchUser(this.state.artistID))
        .then(res => this.setState({
          artistName: res.user.band_name
        }));
      // this.props.fetchSongsAlbum(this.props.match.params.id)
      //   .then(res => this.setState({
      //     songs: [...res.songs]
      //   }));
      // this.setState({
      //   songs: this.props.songs,
      //   // title: temp.title,
      //   // artistID: temp.artist_id,
      //   // description: temp.description,
      //   // photoUrl: temp.photoUrl
      // });
      // this.props.fetchUser(this.state.artistID)
      //   .then(res => this.setState({
      //     artistName: res.user.band_name
      //   }));
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
                <br />
                <ReactAudioPlayer src={song.songUrl} controls />
                {/* <h3>Track Number: {song.track_number}</h3> */}
              </section>;
          });
        }
    let photo = <img />;
    // console.log(this.props.user.photoUrl);
    if (this.props.album.photoUrl){
      photo = <img className="profile" src={this.props.album.photoUrl} />;
    }
    let link = <Artist />;
    if (this.state.artistID !== "" && this.state.artistName !== ""){
      link = <Artist id={this.state.artistID} band_name={this.state.artistName} />;
    }
    // let link = <Link to={`/artists/${this.state.artistID}`}>
    //   {this.state.artistName}
    // </Link>;
    return (
      <section className="album-details">
        <AuthNavBarContainer />
        <section className="auth-body">
          <ul className="album-props">
            <div className="album-text">
              <h3>{this.props.album.title}</h3>
              <li>
                By: {link}
              </li>
              <br />
              <br />
              <br />
            </div>
            <div className="album-tracks">
              <li>{display}</li>
            </div>
          </ul>
          <ul className="album-props-2">
            {photo}
            <div className="album-text">
              {/* <li>Title: {this.props.album.title}</li>
              <li>By: <Artist id={this.props.album.artist_id} /></li>
              <br></br> */}
              <br />
              <li>{this.props.album.description}</li>
            </div>
          </ul>
          {/* <ul className="album-props-3">
            <h3>Artist details</h3>
          </ul> */}
        </section>
        {/* <Footer_auth /> */}
      </section>
    );}
}

export default AlbumDetails;
