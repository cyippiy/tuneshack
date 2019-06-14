import React from 'react';
import { Link } from 'react-router-dom';

class Artist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            band_name: "",
            id: ""
        }
    }
    componentDidMount(){
        // this.props.fetchUser(this.props.id)
        //     .then(res => {
        //         this.setState({
        //             band_name: res.user.band_name,
        //             id: res.user.id
        //         })
        //     });
    }

    render(){
        if (!this.props.id){
            return null;
        }
        let display = <Link />;
        // if (!this.state.id){
        //     return null;
        // } else if (!this.props.id){
        //     return null;
        // }
        //     else if (this.state.band_name === ""){
        //         return null;
        //     }
        // else{
        if (this.props){
            display = <Link to={`/artists/${this.props.id}`}>
                {this.props.band_name}
              </Link>;
        }
        return display;
    }
}

export default Artist;
