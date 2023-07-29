import { MEDIA_FAILUER,MEDIA_SUCCESS,MEDIA_REQUEST ,MEDIA_SUCCESS_POST} from "./actionType";

import axios from "axios";  






export const postmedia=(userData)=>(dispatch)=>{
    dispatch({type:MEDIA_REQUEST})
   return axios.post("https://extinct-sweatpants-colt.cyclic.app/media/add",userData).then((res)=>dispatch({
        type:MEDIA_SUCCESS_POST
    })).catch((err)=>dispatch({type:MEDIA_FAILUER}))

}

export const getmedia=(userData)=>(dispatch)=>{
    dispatch({type:MEDIA_REQUEST})
    return axios.get("https://extinct-sweatpants-colt.cyclic.app/media/",userData).then((res)=>{
        console.log(res)
        dispatch({type:MEDIA_SUCCESS,payload:res.data})
    }).catch((err)=>dispatch({type:MEDIA_FAILUER}))
}