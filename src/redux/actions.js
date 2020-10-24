import axios from "axios";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE
} from "./actionTypes";

export const apiCallBegin = (index) => {
  return {
    type: API_CALL_BEGIN,
    payload: { index }
  };
};

const apiCallDone = (data) => {
  return {
    type: API_CALL_DONE,
    payload: data.data
  };
};

const apiFailure = (e) => {
  return {
    type: API_CALL_FAILURE,
    payload: e
  };
};
