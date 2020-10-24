import axios from "axios";
import { MOCKDATA } from "../mock-data/mock.data";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS
} from "./actionTypes";

const apiCallBegin = (index) => {
  return {
    type: API_CALL_BEGIN,
    payload: { index }
  };
};

const apiCallDone = (data) => {
  
  return {
    type: API_CALL_DONE,
    payload: data
  };
};

const apiFailure = (e) => {
  return {
    type: API_CALL_FAILURE,
    payload: e
  };
};

export const clearInputFields = () => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_INPUT_FIELDS,
      payload: {}
    });
  }
}

const getEmpDataFromMockJson = () => {
  const mockDataObj = MOCKDATA;
  console.log('mockDataObj', mockDataObj);
  return mockDataObj;
}

const getEmpDataFromSession = (dataFromSession, id) => {
  const sessionDataObj = JSON.parse(dataFromSession);
  if (id && dataFromSession === null) {
    window.location.href = 'http://localhost:3000';
    return;
  }
  if (dataFromSession) {
    return id ? { data: sessionDataObj.data.filter((obj) => { return obj.id === Number(id) })[0] } : sessionDataObj;
  }
  return null;
}

export const getProductData = (id) => {
  
  return async (dispatch) => {
    dispatch(apiCallBegin());    
      try {
        let response = await getEmpDataFromMockJson();
        dispatch(apiCallDone(
          response.data
        ));
      } catch (e) {
        console.log(e);
        dispatch(apiFailure(e));
      }
    
  }
}
