import React, { Component } from 'react'

class WhosOnlineListItem extends Component {
    render() {
      const styles = {
        li: {
          display: 'flex',
          alignItems: 'center',
          marginTop: 5,
          marginBottom: 5,
          paddingTop: 2,
          paddingBottom: 2,
        },
        div: {
          borderRadius: '50%',
          width: 11,
          height: 11,
          marginRight: 10,
        },
      }
      return (
        <li style={styles.li}>
          <div
            style={{
              ...styles.div,
              backgroundColor:
                this.props.presenceState === 'online' ? '#3aff5b' : '#414756',
            }}
          />
          {this.props.children}
        </li>
      )
    }
  }

export default WhosOnlineListItem;  