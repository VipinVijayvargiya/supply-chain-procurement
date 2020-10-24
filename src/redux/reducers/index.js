import { combineReducers } from "redux";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS,
  GET_PRODUCT_DATA,
  SUPPLIER_CALL_DONE,
  FILTER_CHANGE,
  SEARCH_CALL_DONE
} from "../actionTypes";

export const initialState = {
  isLoading: false,
  supplierData: [],
  origionalData: [],
  filterData: {},
  uniqueSupplier: [],
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
        badge: state.badge + 1,
        favorites: state.favorites + 1
      }
    case SEARCH_CALL_DONE:
      return {
        ...state,
        isLoading: false,
        serachedProduct: action.payload
      }
    case SUPPLIER_CALL_DONE:
      const uniqueSupplier=[];
      action.payload.forEach((obj)=>{
        if(uniqueSupplier.indexOf(obj.supplier) <0){
          uniqueSupplier.push(obj.supplier);
        }
      })
      return {
        ...state,
        isLoading: false,
        supplierData: action.payload,
        origionalData: action.payload,
        uniqueSupplier
      }
    case API_CALL_FAILURE:
      return {
        ...state,
        isError: true,
      }
    case GET_PRODUCT_DATA:
      return {
        ...state,
        productData: {

        }
      }
    case FILTER_CHANGE:
      const {name, value} = action.payload;
      const filterData = {
        ...state.filterData,
        [name]: value
      }
      const filteredData = state.origionalData.filter((obj)=>filterData[obj.supplier] === "on")
      return {
        ...state,
        filterData,
        supplierData: filteredData.length > 0 ? filteredData : state.origionalData
      }
    default:
      return state;
  }
}

export default combineReducers({ app });
