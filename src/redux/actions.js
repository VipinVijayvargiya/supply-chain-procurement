import axios from "axios";
import { MOCKDATA } from "../mock-data/mock.data";
import SupplierData from "../mock-data/supplierData";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS,
  SUPPLIER_CALL_DONE,
  FILTER_CHANGE
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

const supplierCallDone = (data) =>{
  return {
    type: SUPPLIER_CALL_DONE,
    payload: data.supplier
  };
}

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

export const handleFilterChange = (e) => {
  const {name, checked} = e.target;
  return {
    type: FILTER_CHANGE,
    payload: {
      name,
      value : checked ? "on" : "off"
    }
  };
}
const geProdDataFromMockJson = () => {
  const mockDataObj = MOCKDATA;
  console.log('mockDataObj', mockDataObj);
  return mockDataObj;
}

export const getProductData = (id) => {
  return async (dispatch) => {
    dispatch(apiCallBegin());    
      try {
        let response = await geProdDataFromMockJson();
        dispatch(apiCallDone(
          response.data
        ));
      } catch (e) {
        console.log(e);
        dispatch(apiFailure(e));
      }
    
  }
}
export const getsupplierData = () => {
  return async (dispatch) => {
    dispatch(apiCallBegin());    
      try {
        let response = await SupplierData;
        dispatch(supplierCallDone(
          response
        ));
      } catch (e) {
        console.log(e);
        dispatch(apiFailure(e));
      }
    
  }
}