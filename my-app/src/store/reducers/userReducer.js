export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const UPDATE_USER = "UPDATE_USER";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    case REMOVE_USER:
      return null;
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
