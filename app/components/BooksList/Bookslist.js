import React from 'react'

class BooksList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      books: [
        {title: 'Harry Potter', author: 'J.K. Rowling'},
        {title: 'American Gods', author: 'Neil Gaiman'},
        {title: 'A Farewell to Arms', author: 'Ernest Hemingway'},
        {title: 'Hostage', author: 'Robert Crais'},
        {title: 'A is for Alibi', author: 'Sue Grafton'},
        {title: 'The Persuader', author: 'Lee Child'}
      ]
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const oldBooks = this.state.books
    const newBooks = this.state.books.concat({
      title: this.state.title,
      author: this.state.author
    })
    this.setState({
      title: '',
      author: '',
      books: newBooks
    })
  }
  render () {
    return (
      <div className='BooksList'>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h1>Add a book</h1>
          <input label='Title' type='text' placeholder='Enter a title' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
          <input label='Author' type='text' placeholder='Book Author' value={this.state.author} onChange={(e) => this.setState({author: e.target.value})} />
          <input type='submit' />
        </form>
        <ul>
          {this.state.books.map((book, i) =>
            <li key={i}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default BooksList
