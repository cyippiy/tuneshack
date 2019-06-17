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
                results.push("found an artist")
            }else if (this.state.results[el].album_id){
                results.push("found a song")
            }else if (this.state.results[el].artist_id){
                results.push("found an album")
            }
        }
        console.table(results);
        return(
            <div>
                <form className="search-bar" value="">
                    <input type="text" placeholder="Search for"
                        ref={input => this.search = input}
                        onChange={() => this.handleInputChange()} />
                </form>
            </div>
        )
    }
}

export default SearchBar;