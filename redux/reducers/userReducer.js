import { USER } from "../types";

export default function userReducer(
  state = {
    userName: "",
    userEmail: "",
  },
  action
) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        userName: action.payload.name,
        userEmail: action.payload.email,
      };

    default:
      return { ...state };
  }
}
