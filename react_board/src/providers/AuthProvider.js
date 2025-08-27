/*유저정보 및 프로바이더*/

import React,{createContext,useState,useEffect} from 'react';

export  const UserContext = createContext(null);


export  function  UserProvider ({children}){
    const [user,setUser] = useState(null);
    useEffect(() => {
        const storeUser = localStorage.getItem('USER');
        if(storeUser){
            setUser(JSON.parse(storeUser));
        }
    }, []);
    const  login = (userData) =>{
        setUser(userData);
    };
    const logout =() => {
        setUser(null);
        localStorage.removeItem('USER');
    };
    return (
        <UserContext.Provider value={{user,login,logout}}>
            {children};
        </UserContext.Provider>
    );
}