import { combineReducers } from "redux";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE
} from "../actionTypes";

export const initialState = {
  isLoading: false,
  errorData:[],
  isError: false,
  badge: 0
};

const app = function (state = initialState, action) {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case API_CALL_DONE:
      if(Array.isArray(action.payload)){
        return {
          ...state,
          isLoading: false,
        }
      }
      return {
        ...state,
        isLoading: false,
      }
    case API_CALL_FAILURE:
      return {
        ...state,
        isError: true,
      }
    default:
      return state;
  }
}

export default combineReducers({ app });
