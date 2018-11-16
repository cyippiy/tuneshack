import React from 'react';
import merge from "lodash/merge";

class AlbumCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            artist_id: this.props.user,
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleFile(e){
        this.setState({photo: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (document.getElementById('photo').files.length === 1){
            this.state.contentType = false,
            this.state.processData = false
        }
        const album = merge({}, this.state);
        console.log(album);
        this.props.createAlbum(album,this.props.user);
    }

    render() {
        return <div id="album-create-container">
            <div id="album-form">
              <form onSubmit={this.handleSubmit} className="album-form-box">
                <label>Title:</label>
                <input type="text" value={this.state.title} onChange={this.update("title")} className="album-input" id="title" />
                <label>Description:</label>
                <input type="text" value={this.state.description} onChange={this.update("description")} className="album-input" id="description" />
                <label>Photo:</label>
                <input type="file" onChange={this.handleFile} className="album-input" id="photo" />
                
                <button className="album-submit" type="submit" id="btn-submit">Create</button>
              </form>
            </div>
          </div>;
    }

}

export default AlbumCreate;