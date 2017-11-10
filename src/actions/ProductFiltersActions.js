import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

import {
    BRAND_LIST_FETCH,
    BRAND_LIST_FETCH_SUCCESS,
    BRAND_LIST_FETCH_FAIL,
    SELECTED_BRAND_CHANGED,
    CATEGORY_LIST_FETCH,
    CATEGORY_LIST_FETCH_SUCCESS,
    CATEGORY_LIST_FETCH_FAIL,
    SELECTED_CATEGORY_CHANGED,
    SUBCATEGORY_LIST_FETCH,
    SUBCATEGORY_LIST_FETCH_SUCCESS,
    SUBCATEGORY_LIST_FETCH_FAIL,
    SELECTED_SUBCATEGORY_CHANGED,
    SELECTED_CODE_CHANGED,
    SELECTED_DESCRIPTION_CHANGED,
    PRODUCT_LIST_FETCH,
    PRODUCT_LIST_FETCH_SUCCESS,
    PRODUCT_LIST_FETCH_FAIL,
} from './types';

const makeFilteredUrl = (dispatch) => {
    var url = api.getFilterProductListlUrl();
    const filterId = api.getFilterId();
}

export const filteredProductListFetch = () => {
    return (dispatch, getState) => {
        const url = makeFilteredUrl(dispatch)

        return dispatch(genericListFetch(
            PRODUCT_LIST_FETCH,
            PRODUCT_LIST_FETCH_SUCCESS,
            PRODUCT_LIST_FETCH_FAIL,
            url))
    }
};

export const selectedBrandChanged = (selected) => {
    return ({
        type: SELECTED_BRAND_CHANGED,
        payload: selected
    });
}

export const brandListFetch = () => {
    return (dispatch) => {
        return dispatch(genericListFetch(
            BRAND_LIST_FETCH,
            BRAND_LIST_FETCH_SUCCESS,
            BRAND_LIST_FETCH_FAIL,
            api.getBrandListlUrl()))
    }
};

export const selectedCategoryChanged = (selected) => {
    return ({
        type: SELECTED_CATEGORY_CHANGED,
        payload: selected
    });
}

export const selectedSubCategoryChanged = (selected) => {
    return ({
        type: SELECTED_SUBCATEGORY_CHANGED,
        payload: selected
    });
}

export const selectedCodeChanged = (selected) => {
    return ({
        type: SELECTED_CODE_CHANGED,
        payload: selected
    });
}

export const selectedDescriptionChanged = (selected) => {
    return ({
        type: SELECTED_DESCRIPTION_CHANGED,
        payload: selected
    });
}

