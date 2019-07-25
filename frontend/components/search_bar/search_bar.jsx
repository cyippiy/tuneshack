import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: "",
            results: {},
            typingTimeout: 0
        }
        this.searchAll = this.searchAll.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.timeout = 0;
    }
    // componentWillUnmount(){
    //     clearTimeout(this.timer);
    // }

    searchAll() {
        let results = [];
        if (this.state.query){
            if (this.state.query !== ""){
                if (this.props){
                    this.props.searchResults(this.state.query)
                        .then(res=>{
                            this.setState({results: res.results});
                        })
                }
            }
        }
    }

    handleInputChange() {
        if (this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            query: this.search.value,
            typingTimeout: this.timer=setTimeout(() => {
                this.searchAll()
            },100)
        });
    }

    render(){

        let results = [];
        let className = "results";
        if (this.state.query === ""){
            results = [];
        }else if (this.state.results){
            if (Object.keys(this.state.results).length > 0){
                className+= " results-active";
            }
            for(let el in this.state.results){
                //user
                if (this.state.results[el].email){
                    results.push(<li key={el}>
                        <div><Link className="btn" to={`/artists/${this.state.results[el].id}`}>
                            Artist: {this.state.results[el].band_name ? this.state.results[el].band_name : this.state.results[el].email}
                            </Link>
                        </div>
                    </li>);
                }else if (this.state.results[el].album_id){
                    //track song
                    results.push(<li key={el}>
                        <div><Link className="btn" to={`/albums/${this.state.results[el].album_id}`}>
                            Song: {this.state.results[el].title}
                        </Link>
                        </div>
                    </li>);

                }else if (this.state.results[el].artist_id){
                    //album
                    results.push(<li key={el}>
                        <div><Link className="btn" to={`/albums/${this.state.results[el].id}`}>
                            Album: {this.state.results[el].title}
                        </Link>
                        </div>
                    </li>);
                }
            }
        }
        return(
            // <div className="search-bar-container">
            <form className="search-bar" value="">
                <input type="text" placeholder="Search for"
                    ref={input => this.search = input}
                    onChange={() => this.handleInputChange()} />

                <ul className={className}>
                    {results}
                </ul>

                    
            </form>
            // </div>
        )
    }
}

export default SearchBar;