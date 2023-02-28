import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function(){
    const[loading,setLoading]=useState(false);
    const location = useLocation();

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
           setLoading(false) 
        },1200);
    },[location]);
    
    return{
        loading
    };
}