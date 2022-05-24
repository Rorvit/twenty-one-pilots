import { Action } from '../actionType/ActionType'

// const initialState = {
//   users: []
// }

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case Action.INIT_USERS: {
      return [...action.payload]
    }
      

  
    default:
     return state;
  }
}