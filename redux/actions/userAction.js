import {USER} from '../types';

export const setUser = (user)=>({
    type:USER,
    payload: {
        email: user.email,
        name:user.name
    }
})