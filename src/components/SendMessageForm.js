import React, { Component } from 'react'

class SendMessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.text)
    this.setState({ text: '' })
  }

  onChange(e) {
    this.setState({ text: e.target.value })
    if (this.props.onChange) {
      this.props.onChange()
    }
  }

//   render() {
//     return (
//       <form 
//         onSubmit={this.onSubmit}
//         className="send-message-form">
//         <input
//           type="text"
//           placeholder="Type a message here then hit ENTER"
//           onChange={this.onChange}
//           value={this.state.text}
//         />
//       </form>
//     )
//   }
// }

render() {
  return (
    <div className="send-message-form">
      <form onSubmit={this.onSubmit}>
      <input
        type="text"
        placeholder="Type a message here then hit ENTER"
        onChange={this.onChange}
        value={this.state.text}
      />
    </form>
    </div>
  )
}
}

export default SendMessageForm
