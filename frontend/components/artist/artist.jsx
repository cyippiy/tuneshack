import React from 'react';


class Artist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            artist: 0;
        }
    }
    componentDidMount(){
        this.props.fetchUser(this.state.artist);
    }
}

