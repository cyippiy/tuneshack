import React from 'react';
import AuthNavBarContainer from '../auth_nav_bar/auth_nav_bar_container';
import values from 'lodash/values';
import { Link } from 'react-router-dom';

class AlbumCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            photo: null
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const album = merge({}, this.state);
        this.props.createAlbum(album);
    }

}

export default AlbumCreate;