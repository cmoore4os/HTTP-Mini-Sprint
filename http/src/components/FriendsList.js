import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends(); // waiting on the promise if this return from the connect() below
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={i}>
                <p>{`Friend ${i + 1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // this get all of the app states
  return {
    // but for this component we only want this part of the state
    friends: state.friends // this then becomes a prop for this component
  };
};
// Mecause this component is not changing state, it's connect does not use mapDispatchToProps()
export default connect(mapStateToProps, { getFriends })(FriendsList);
// ------------connect(the portion of state for this component,) (which component we ar providing the data to)
// when connect is finish the component has a new state even if it is the exact same infomation
