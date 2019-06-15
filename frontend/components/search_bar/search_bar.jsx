import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: "",
            results: [],
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
                    this.props.searchUsers(this.state.query)
                        .then(res=> {
                            if (res.users){
                                let users = [...res.users.users];
                                results.push(users);
                            }else{
                                results.push([]);
                            }
                        })
                        // this.props.searchAlbums(this.state.query)
                        .then(() => this.props.searchAlbums(this.state.query))
                        .then(res => {
                            if (res.albums) {
                                let albums = [...res.albums.albums];
                                results.push(albums);
                            } else {
                                results.push([]);
                            }
                        })
                        .then(() => this.props.searchSongs(this.state.query))
                        .then(res => {
                            if (res.songs){
                                let songs = [...res.songs.songs];
                                results.push(songs);
                            }else{
                                results.push([]);
                            }
                        })
                        .then(()=> this.setState({
                            results
                        }));
                    // .then(res => results=[...res]);
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