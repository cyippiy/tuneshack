import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: "",
            results: []
        }
    }

    handleInputChange() {
        this.setState({
            query: this.search.value
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