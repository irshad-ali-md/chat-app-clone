import React, { Component } from 'react';
import WhosOnlineListItem from './WhosOnlineListItem';

class WhosOnlineList extends Component {
  renderUsers() {
    return (
      <div className="whos-online-list">
        <ul>
          {this.props.users.map((user, index) => {
            if (user.id === this.props.currentUser.id) {
              return (
                <WhosOnlineListItem key={index} presenceState="online">
                  {user.name} (You)
                </WhosOnlineListItem>
              )
            }
            return (
              <WhosOnlineListItem key={index} presenceState={user.presence.state}>
                {user.name}
              </WhosOnlineListItem>
            )
          })}
        </ul>
      </div>
    )
  }

  render() {
    if (this.props.users) {
      return this.renderUsers()
    } else {
      return <p>Loading...</p>
    }
  }
}

export default WhosOnlineList;