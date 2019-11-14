import React, { Component } from 'react'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

class MyDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchString: '',
      searchResult: []
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(str){
    const result = [str.toUpperCase(), str.toLowerCase()]
    this.setState({
      searchString: str,
      searchResult: result
    })
  }

  render(){
    return (
      <div>
        <h3>Welcome to my dashboard</h3>

        <SearchBox 
          string={this.state.searchString} 
          onChange={this.handleSearch} />

        <SearchResult
          searchString={this.state.searchString}
          searchResult={this.state.searchResult} />
      </div>
    )
  }
}

export default MyDashboard
