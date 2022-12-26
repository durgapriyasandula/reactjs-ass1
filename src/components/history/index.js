import {Component} from 'react'

import './index.css'

import historyItem from '../historyItem'

class history extends Component {
  state = {searchInput: '', HistoryList: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  const  deleteHistory=(id)=>{
     const {HistoryList}=this.state
     const listAfterDelete=HistoryList.filter(eachHistory=>eachHistory.id!==id)
     this.setState({HistoryList:listAfterDelete})
  }
  render() {
    const {searchInput, HistoryList} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search History"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <ul className="history-list">
              {searchResults.map(eachHistory => (
                <historyItem
                  historyDetails={eachHistory}
                  key={eachHistory.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default history
