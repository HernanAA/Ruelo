import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'

import {
    SELECTED_BRAND_CHANGED
} from './types';

export const selectedBrandChanged = (selectedBrand) => {
    return ({
        type: SELECTED_BRAND_CHANGED,
        payload: selectedBrand 
    });
}