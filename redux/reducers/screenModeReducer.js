import {SCREEN_MODE} from '../types'

export default function screenModeReducer (state=new function(){
    this.bool = true,
    this.mode = this.bool?'dark':'light'
},action){
    switch (action.type) {
        case SCREEN_MODE:
            
            return{
                ...state,
                bool:!bool,
            };
    
        default:
            return{...state};
    }
}