import React from 'react';
import { Link } from 'react-router-dom';

class Artist extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchUser(this.props.id);
    }

    render(){
        if (!this.props.id){
            return null;
        }
        else if (!this.props.artist){
            return null;
        }
        else{
            let display = <Link to={`/artists/${this.props.id}`}>
                {this.props.artist.band_name}
              </Link>;
            return display;
        }
    }
}

export default Artist;
