import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import MessageBox from './MessageBox'

const apiEndpoint = 'http://message-list.appspot.com/messages?limit=10'

class MessageList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: [],
      token: ''
    }
  }
  getMessages () {
    let url = apiEndpoint
    if (this.state.token !== '') { url += `&pageToken=${this.state.token}` }
    axios.get(url)
    .then((res) => {
      let temp = this.state.messageList
      let combination = temp.concat(res.data.messages)
      let sortedMessages = _.orderBy(combination, (o) => o.updated, 'desc')
      this.setState({
        messageList: sortedMessages,
        token: res.data.pageToken
      })
    })
    .catch((res) => {
      console.error(res)
    })
  }
  deleteMessage (id) {
    const oldMessages = this.state.messageList
    const newMessages = oldMessages.filter((o) => o.id !== id)
    this.setState({
      messageList: newMessages
    })
  }
  componentDidMount () {
    this.getMessages()
  }
  render () {
    return (
      <div className='MessagesList'>
        <button onClick={this.getMessages.bind(this)}>Click me!</button>
        {(this.state.messageList.length > 0) ?
          <ul>
            {this.state.messageList.map((m, i) =>
              <MessageBox key={i}
                author={m.author}
                message={m.content}
                date={m.updated}
                id={m.id}
                handleDelete={this.deleteMessage.bind(this, m.id)}
                />
            )}
          </ul>
          :
          <p>
            No messages.
          <button onClick={this.getMessages.bind(this)}>You must have messages!</button>
          </p>
        }
      </div>
    )
  }
}

export default MessageList
