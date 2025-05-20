import { useEffect, useState } from "react";
import api from "../config/axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function useAuth(){
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    // ex token : 4|ed8GTTy5ZH2b9dpSI0vbQUmScgTIPwM296lKKPW5bd9da523  

    const fetchUser = async()=>{
        try{
            const res = await api.get('/user')
            
            setUser(res.data);
        }
        catch{
            setUser(null);
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        if(localStorage.getItem('token')) fetchUser();
        else setLoading(false);
    },[]);

    const login = async(email, password)=>{

            const res = await api.post('/login/guru',{email, password});
            localStorage.setItem('token', res.data.token);
            await fetchUser();

    };

    const logout = async()=>{
        await api.post('/logout');
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');

    }

    return {user, login, logout, loading};
}


