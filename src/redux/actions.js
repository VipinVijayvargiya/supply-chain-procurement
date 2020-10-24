import axios from "axios";
import { MOCKDATA, QUERYDATA } from "../mock-data/mock.data";
import SupplierData from "../mock-data/supplierData";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS,
  SUPPLIER_CALL_DONE,
  FILTER_CHANGE,
  SEARCH_CALL_DONE
} from "./actionTypes";

const apiCallBegin = (index) => {
  return {
    type: API_CALL_BEGIN,
    payload: { index }
  };
};

const apiCallDone = (data, typeOfData) => {
  if(typeOfData === "getPastData"){
    return {
      type: API_CALL_DONE,
      payload: data
    };
  }
  return {
    type: SEARCH_CALL_DONE,
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
const geProdDataFromPast = () => {
  const mockDataObj = MOCKDATA;
  console.log('mockDataObj', mockDataObj);
  return mockDataObj;
}

const geProdDataFromMockJson = () => {
  const mockDataObj = QUERYDATA;
  console.log('mockDataObj', mockDataObj);
  return mockDataObj;
}

export const getProductData = (id) => {
  return async (dispatch) => {
    dispatch(apiCallBegin());    
      try {
        let response = await geProdDataFromPast();
        dispatch(apiCallDone(
          response.data, 'getPastData'
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
          response, 'getNewData'
        ));
      } catch (e) {
        console.log(e);
        dispatch(apiFailure(e));
      }
    
  }
}
export const searchProductbyQuery = (e) =>{
  const {value} = e.target;
  return async (dispatch) => {
    dispatch(apiCallBegin());
      try {
        let response = await geProdDataFromMockJson();
        
        dispatch(apiCallDone(
          response.data.filter((obj)=>obj.name.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        ));
      } catch (e) {
        console.log(e);
        dispatch(apiFailure(e));
      }
  }
}