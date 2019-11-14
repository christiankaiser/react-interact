import React, { Component } from 'react'

class SearchBox extends Component {
  constructor(props){
    super(props)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange(event){
    this.props.onChange(event.target.value)
  }

  render(){
    return (
      <div className="searchBox">
        <label>Search:</label>
        <input id="search" value={this.props.string} onChange={this.handleSearchChange} />
      </div>
    )
  }
}


export default SearchBox
