import React from 'react'
import Bio from '../Bio/Bio'
import BooksList from '../BooksList/BooksList'
import MessageList from '../MessageList/MessageList'
import PostToSlack from '../PostToSlack/PostToSlack'

class HomePage extends React.Component {
  render () {
    return (
      <main>
        <Bio
          myName='Elizabeth'
          age={'ageless'}
          pronoun={{
            nominative: 'she',
            accusative: 'her',
            possessive: 'hers',
            reflexive: 'herself'
          }}
          favoriteActivity='floating through time'
        />
        <BooksList />
        <PostToSlack />
        <MessageList />
      </main>
    )
  }
}

export default HomePage
