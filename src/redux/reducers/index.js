import { combineReducers } from "redux";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS,
  GET_PRODUCT_DATA
} from "../actionTypes";

export const initialState = {
  isLoading: false,
  empToOnboard: {},
  errorData: [],
  isError: false,
  badge: 0,
  favorites: 0
};

const app = function (state = initialState, action) {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case API_CALL_DONE:
      
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          isLoading: false,
          productData: action.payload
        }
      }
      return {
        ...state,
        isLoading: false,
        empToOnboard: action.payload,
        badge: state.badge + 1,
        favorites: state.favorites + 1
      }
    case API_CALL_FAILURE:
      return {
        ...state,
        isError: true,
      }
    case CLEAR_INPUT_FIELDS:
      return {
        ...state,
        empToOnboard: action.payload,
      }
    case GET_PRODUCT_DATA:
      return {
        ...state,
        productData: {

        }
      }
    default:
      return state;
  }
}

export default combineReducers({ app });
