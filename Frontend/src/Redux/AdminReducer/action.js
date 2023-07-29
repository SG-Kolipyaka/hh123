import { LOGIN_FAILUER,LOGIN_SUCCESS,LOGIN_REQUEST ,LOGIN_SUCCESS_POST} from "./actionType";

import axios from "axios";  



export const loginuser=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios.post("https://extinct-sweatpants-colt.cyclic.app/admin/login",userData).then((res)=>{
    if(res.data.token!==undefined){
        localStorage.setItem("token",JSON.stringify(res.data.token))
        dispatch({
            type:LOGIN_SUCCESS,payload:res.data.token
        })
    }
   }).catch((err)=>dispatch({type:LOGIN_FAILUER}))

}        




export const registeruser=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
   return axios.post("https://extinct-sweatpants-colt.cyclic.app/admin/register",userData).then((res)=>dispatch({
        type:LOGIN_SUCCESS_POST
    })).catch((err)=>dispatch({type:LOGIN_FAILUER}))

}