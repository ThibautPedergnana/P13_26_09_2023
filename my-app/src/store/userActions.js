import { ADD_USER } from "./reducers/userReducer";

export const addUserAction = (user) => ({
  type: ADD_USER,
  payload: user,
});
