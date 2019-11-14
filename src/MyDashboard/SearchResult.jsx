import React, { Component } from 'react'

class SearchResult extends Component {

  constructor(props){
    super(props)
    this.result = this.result.bind(this)
  }

  result(){
    var results = []
    for (var i=0; i < this.props.searchResult.length; i++){
      var s = this.props.searchResult[i]
      results.push(<li key={i}>{s}</li>)
    }
    return results
  }

  render(){
    return (
      <div className="searchResult">
        <div>
          <ul>
            {this.result()}
          </ul>
        </div>
      </div>
    )
  }
}


export default SearchResult
