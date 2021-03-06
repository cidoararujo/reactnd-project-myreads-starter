import React from 'react'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  handleBackToList = () => {
    this.setState({ showSearchPage: false })
  }
  handleListBook = () => {
    this.setState({ showSearchPage: true })
  }
  render() {
    return (
      <div className="app">
        <Route path = "/search" component={SearchBooks}/> 
        <Route exact path="/" component = {ListBooks}/>
      </div>
    )
  }
}

export default BooksApp
