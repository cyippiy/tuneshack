# README

[Live Demo](https://tuneshack.herokuapp.com)


TuneShack is a music application clone that is inspired by BandCamp. It's a way for people to discover and find music. It was built with a Rails/PostgresSQL backend and React.js/Redux on the frontend.


## Features
  * Secure frontend to backend user authentication using BCrypt.
  * Users can edit information on the profile
  * Songs can be played from 

## Technical Implementation
The music player is one of the many react components that is conditionally rendered based on the front-end routes. The album information is pulled from the state slice and is fed into the music player.

```render(){
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
            <section className="track-render" key={song.id}>
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
        <section className="auth-body">
          <ul className="album-props">
            <div className="album-text">
              <li>{photo}</li>
              <li>Title: {this.props.album.title}</li>
              <li>Description: {this.props.album.description}</li>
            </div>
            <div className="album-tracks">
              <li>{display}</li>
            </div>
          </ul>
        </section>
      </section>
  )}
  ```


## Additional Planned Features
  * users can change profile picture
  * users can upload music