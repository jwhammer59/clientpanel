import { NOTIFY_USER } from '../actions/types';

const intialState = {
  message: null,
  messageType: null
};

export default function(state = intialState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    default:
      return state;
  }
}
