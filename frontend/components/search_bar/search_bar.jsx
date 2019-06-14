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
        this.search = this.search.bind(this);
    }

    search() {
        let results = [];
        if (this.state.query){
            if (this.state.query !== ""){
                searchUsers(this.state.query).then(res => results=[...res]);
            }
        }
    }

    handleInputChange() {
        if (this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            query: this.search.value,
            typingTimeout: setTimeout(() => {
                this.search()
            })
        })
    }

    render(){
        return(
            <form className="search-bar" value="">
                <input type="text" placeholder="Search for"
                ref={input => this.search = input}
                onChange={()=>handleInputChange()} />
            </form>
        )
    }
}

export default SearchBar;