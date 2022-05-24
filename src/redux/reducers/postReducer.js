import { Action } from '../actionType/ActionType'


export const postReducer = (state = [], action) => {
  switch (action.type) {
    case Action.INIT_POSTS: {
      return [...action.payload]
    }
    
    default:
     return state;
  }
}