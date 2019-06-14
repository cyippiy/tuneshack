import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: "",
            results: [],
            typingTimeout: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.searchAll = this.searchAll.bind(this);
    }

    searchAll() {
        let results = [];
        if (this.state.query){
            if (this.state.query !== ""){
                if (this.props){
                    this.props.searchUsers(this.state.query);
                    // .then(res => results=[...res]);
                }
            }
        }
        console.table(results);
    }

    handleInputChange() {
        if (this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            query: this.search.value,
            typingTimeout: setTimeout(() => {
                this.searchAll()
            },100)
        })
    }

    render(){
        return(
            <form className="search-bar" value="">
                <input type="text" placeholder="Search for"
                ref={input => this.search = input}
                onChange={()=>this.handleInputChange()} />
            </form>
        )
    }
}

export default SearchBar;