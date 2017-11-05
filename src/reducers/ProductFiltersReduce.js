import {
    BRAND_LIST_FETCH,
    BRAND_LIST_FETCH_SUCCESS,
    BRAND_LIST_FETCH_FAIL,
    SELECTED_BRAND_CHANGED,
  } from '../actions/types';
  
  const INITIAL_STATE = {
    brandsList: [
        {id:1, name: 'Marca 1'},
        {id:2, name: 'Marca 2'},
        {id:3, name: 'Marca 3'},
        {id:4, name: 'Marca 4'},
        {id:5, name: 'Marca 5'}],
    selectedBrand: [],
    brandFetching: false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case BRAND_LIST_FETCH:
        return { ...state, brandFetching: true };
      case BRAND_LIST_FETCH_SUCCESS:
        return { ...state, ...action.payload, brandsList: action.payload.list, brandFetching: false };
      case BRAND_LIST_FETCH_FAIL:
        return { ...state, ...action.payload, brandFetching: false };
      case SELECTED_BRAND_CHANGED:
        return { ...state, selectedBrand: action.payload };
      default:
        return state;
    }
  };
  