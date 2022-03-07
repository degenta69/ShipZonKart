import {SCREEN_MODE} from '../types';

export const setUser = (bool)=>({
    type:SCREEN_MODE,
    payload: {
        bool: bool
    }
})