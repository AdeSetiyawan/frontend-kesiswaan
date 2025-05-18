import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import { Children, useEffect, useState } from "react";

import api from "../config/axios";
export default function Middleware({ children }){
    const {loading} = useAuth();
    const [user, setDataUser] = useState(null);
        const [checking, setChecking] = useState(true);


        
    useEffect(()=>{
        const user = async()=>{
            try{
           const res_user=  await api.get('/user');
           setDataUser(res_user);
            }
            catch(e){
                setDataUser(null);
            }
            finally{
                setChecking(false);
            }
        };
        user();
    },[]);


    
    if(loading || checking) return <div className='relative w-screen h-screen'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <span className="loading loading-dots loading-xl "></span>
        </div>
      </div>
    if(!user)return <Navigate to="/" replace/>
return <>{children}</>;
}