import React from "react";
import AuthNavBarContainer from "../auth_nav_bar/auth_nav_bar_container";
import values from "lodash/values";
import ReactAudioPlayer from "react-audio-player";
import MusicPlayer from "../music_player/music_player";

class AlbumEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            // artist: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchAlbum(this.props.id);
        this.props.fetchSongsAlbum(this.props.id);
        if (this.props.album){
            this.setState({ title: this.props.album.title,
                            description: this.props.album.description})
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchAlbum(this.props.match.params.id);
            this.props.fetchSongsAlbum(this.props.id);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.editUser(this.state);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        if (!this.props.album) {
            return null;
        }

        let arr = this.props.songs;
        let display = (<section>No Songs</section>);
        if (!arr) {
            return null;
        }
        else {
            display = (
                arr.map(song => {
                    return (
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
            )
        }
        let photo = <img />
        // console.log(this.props.user.photoUrl);
        if (this.props.album.photoUrl) {
            photo = <img className="profile" src={this.props.album.photoUrl} />
        }


        return (
            <section className="album-details">
                <AuthNavBarContainer />
                <section className="auth-body">
                    <ul className="album-props">
                        <div className="album-text">
                            <li>{photo}</li>

                            <form id="album-form" onSubmit={this.handleSubmit}>
                            <label>Title: THIS IS A TEST: </label>
                            <input type="text"
                            value={this.state.title}
                            onChange={this.update("title")} />

                            <label>Description:</label>
                            <input type="text"
                                value={this.state.description}
                                onChange={this.update("description")} />
                            <input id="btn" type="submit" value="edit information" />
                            </form>
                        </div>
                        <div className="album-tracks">
                            <li>{display}</li>
                        </div>
                    </ul>
                </section>
            </section>
        )
    }
}

export default AlbumEdit;