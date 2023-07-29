import { MEDIA_FAILUER,MEDIA_SUCCESS,MEDIA_REQUEST ,MEDIA_SUCCESS_POST} from "./actionType";

const initialState={
    isLoading:false,        
    isError:false,  
   media:[]
}

export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case MEDIA_REQUEST:
        return {...state,isLoading:true}
        case MEDIA_SUCCESS:
            return {...state,isLoading:false,media:payload}
        case MEDIA_SUCCESS_POST:
            return {...state,isLoading:false}
            case MEDIA_FAILUER:
                return {...state,isLoading:false,isError:true}
    default:
        return state
}

}           