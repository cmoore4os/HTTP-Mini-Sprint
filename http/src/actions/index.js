import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
  // Add the code for this
  const dataUrl = 'http://localhost:5000/friends';
  const friendsData = axios.get(dataUrl);
  return {
    type: GET_FRIENDS,
    payload: friendsData // redux-promise middleware will know this is a axios promise
  };
};
