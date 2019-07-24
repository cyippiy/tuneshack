import React from 'react';

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
                    // console.log(`searching ${this.state.query}`);
                    this.props.searchResults(this.state.query)
                        .then(res=>{
                            this.setState({results: res.results});
                        })
                }
            }
        }
        // console.table(results);
    }

    handleInputChange() {
        if (this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }
        // this.searchAll();
        this.setState({
            query: this.search.value,
            typingTimeout: this.timer=setTimeout(() => {
                this.searchAll()
            },100)
        });
        // if(this.timer) clearTimeout(this.timer);
        // this.timer = setTimeout(()=>{
        //     this.searchAll();
        // },100);


    }

    render(){

        let results = [];
        if (this.state.results)
        for(let el in this.state.results){
            //checks if this is a user
            if (this.state.results[el].email){
                results.push(`email id: ${el}`);
            }else if (this.state.results[el].album_id){
                results.push(`album_id: ${el}`);
            }else if (this.state.results[el].artist_id){
                results.push(`artist_id: ${el}`);
            }
        }
        console.table(results);
        return(
            // <div className="search-bar-container">
            <form className="search-bar" value="">
                <input type="text" placeholder="Search for"
                    ref={input => this.search = input}
                    onChange={() => this.handleInputChange()} />

                <ul className="results">
                    <li>stuff</li>
                    <li>stuff</li>
                    <li>stuff</li>
                    <li>stuff</li>
                    <li>stuff</li>
                    <li>stuff</li>
                    <li>stuff</li>
                    <li>stuff</li>
                </ul>

                    
            </form>
            // </div>
        )
    }
}

export default SearchBar;