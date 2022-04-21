import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext();

const UserProvider = (props) => {

    const [userAuth, setUserAuth] = useState({
        login: false,
        id: null,
        role: null
    });

    useEffect(async()=> {

        const fetch = await axios.get('/api/utils/cookies');

        if(fetch.data){
            setUserAuth({
                login: true,
                id: fetch.data.id,
                role: fetch.data.role   
            })
        }
        else{
            setUserAuth({
                ...userAuth,
                login: false
            })
        }
    },[]);

    return(
        <userContext.Provider value={{userAuth, setUserAuth}}>
            { props.children }
        </userContext.Provider>
    );
}

export default UserProvider;