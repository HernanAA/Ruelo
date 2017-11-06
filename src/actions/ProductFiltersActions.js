import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'

import {
    SELECTED_BRAND_CHANGED,
    SELECTED_CATEGORY_CHANGED,
    SELECTED_SUBCATEGORY_CHANGED,
    SELECTED_CODE_CHANGED,
    SELECTED_DESCRIPTION_CHANGED
} from './types';

export const selectedBrandChanged = (selected) => {
    return ({
        type: SELECTED_BRAND_CHANGED,
        payload: selected 
    });
}

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