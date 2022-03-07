import { SCREEN_MODE } from "../types";

export default function screenModeReducer(
  state = {
    bool: true,
  },
  action
) {
  switch (action.type) {
    case SCREEN_MODE:
      return {
        ...state,
        bool: action.payload.bool,
      };

    default:
      return { ...state };
  }
}
