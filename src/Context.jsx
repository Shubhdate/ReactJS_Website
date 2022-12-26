import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import Reducer from "./Reducer" ;

const AppContext = React.createContext();// warehouse
const intialState = {
    name:"",
    image: "",
    services: [],
};

// i hav to make  mine one
const API = "https://thapareactapi.up.railway.app";

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(Reducer, intialState);

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload:{
                    name:"Shubhaaam.com",
                    image: "./images/hero.svg",
                }
            }
        )
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload:{
                    name:"Shubham Date",
                    image: "./images/about1.svg",
                }
            }
        )
    }

    //to get api data
    const getServices = async(url) =>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type: "GET_SERVICES", payload:data});

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getServices(API);
    }, []);

    return <AppContext.Provider value={{...state, updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>;
};//provider

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalContext};


